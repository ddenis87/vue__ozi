<template>
  <div class="person-card">
    <div class="title-box">
      <div class="title-box__info">
        <h3 class="title-box__info-title">Пользователь -</h3>
        <div class="title-box__info-description">
          <span>{{ profileUser.VFIO }}</span>
          <span>{{ profileUser.VPOSTNAME }}</span>
          <span>{{ profileUser.VDEPARTMENTNAME }}</span>
          <span>{{ profileUser.VDISTRICTNAME }}</span>
        </div>
      </div>
      <div class="title-box__control">
        <c-button @click="backPerson">Вернуться</c-button>
      </div>
    </div>
    <div class="person-card__body">
      <hr class="person-card__separator"/>
      <div class="person-card__sub-menu">
        <ul class="sub-menu">
          <router-link class="sub-menu__item"
                       active-class="sub-menu__item-active"
                       v-for="(item, index) in listSubmenu"
                       :key="index"
                       :to="item.CPATH  + '?personId=' + personId"
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
    profileUser() { return this.$store.getters.GET_PROFILE_USER; }
  },
  data() {
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
  created() {
    
    this.$store.dispatch('SET_PROFILE_USER',{ valueUserId: this.personId });
    this.$router.push('/person-card/__document?personId=' + this.personId);
  },
  methods: {
    backPerson() { this.$router.push('/person'); }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/variables.scss';

.person-card {
  font-family: 'Montserrat';
  box-sizing: border-box;
  .title-box {
    display: flex;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    &__info {
      display: inline-flex;
      color: darkslategrey;
      &-description {
        display: inline-flex;
        flex-direction: column;
        padding-left: 5px;
        font-size: 0.9em;
        font-style: italic;
      }
    }
    &__control {
      max-width: 200px;
    }
  }
  &__sub-menu {
    padding: 0px 10px;
    
    .sub-menu {
      display: flex;
      list-style: none;
      padding: 0px;
      margin: 0px;
      &__item {
        width: 100%;
        margin: 0px 1px;
        padding: 2px;
        text-align: center;
        color: white;
        font-family: 'Open sans';
        font-size: 12px;
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
    padding: 10px 15px;
  }
  &__separator {
    margin: 10px 0px;

  }
}
</style>