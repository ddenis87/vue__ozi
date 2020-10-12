<template>
  <div class="person-card">
    <h3 class="person-card__title">Пользователь - {{ personNameFull }}</h3>
    <div class="person-card__control">
      <c-button @click="backPerson">Вернуться</c-button>
    </div>
    <div class="person-card__body">
      <hr class="person-card__separator"/>
      <div class="person-card__sub-menu">
        <ul class="sub-menu">
          <router-link class="sub-menu__item"
                       active-class="sub-menu__item-active"
                       v-for="(item, index) in listSubmenu"
                       :key="index"
                       :to="item.CPATH + '?personId=' + personId"
                       tag="li">{{ item.CNAME }}</router-link>
        </ul>
      </div>
      <div class="person-card__props">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import cButton from '@/components/elements/c-button';

export default {
  name: 'personCard',
  components: {
    cButton,
  },
  computed: {
    personNameFull() { return this.$store.state.personProfile.personNameFull; },
  },
  data: function() {
    return {
      listSubmenu: [
        {CNAME: 'Общее', CPATH: '/person-card/__info'},
        {CNAME: 'Заявки', CPATH: '/person-card/__document'},
        {CNAME: 'Криптография', CPATH: '/person-card/__crypto'},
        {CNAME: 'Ресурсы', CPATH: '/person-card/__res'},
        {CNAME: 'Прочее', CPATH: '/person-card/__other'},
      ],
      personId: decodeURI(window.location.search.slice(window.location.search.indexOf("=") + 1)),
    }
  },
  created: function() {
    let option = {
      function: 'getPersonInfoFull',
      personId: this.personId
    }
    axios
      .post(pathBackend + 'person.php', null, {params: option})
      .then(response => {
        this.$store.commit('setPersonProfile', response.data[0]);
        this.$router.push('/person-card/__document?personId=' + this.personId)
      })
      .catch(() => {
      })
  },
  methods: {
    backPerson() {
      this.$router.push('/person');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/variables.scss';

.person-card {
  font-family: 'Montserrat';
  &__title {
    margin-bottom: 10px;
    color: darkslategrey;
  }
  &__control {
    max-width: 200px;
  }
  &__sub-menu {
    padding: 0px 20px;
    .sub-menu {
      display: flex;
      list-style: none;
      padding: 0px;
      &__item {
        width: 100%;
        margin: 0px 1px;
        padding: 3px;
        text-align: center;
        color: white;
        font-family: 'Open sans';
        font-size: 14px;
        text-transform: uppercase;
        border: 1px solid darkblue;
        border-radius: 5px 3px 0px 0px;
        box-sizing: border-box;
        background-color: $colorMain;
        cursor: pointer;
        &-active {
          background-color: darkgoldenrod;
        }
      }
    }
  }
  &__props {
    padding: 0px 20px;
  }
  &__separator {
    margin: 10px 20px;
  }
}
</style>