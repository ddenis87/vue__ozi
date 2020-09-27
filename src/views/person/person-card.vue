<template>
  <div class="person-card">
    <h3 class="person-card__title">Пользователь - Карта</h3>
    <div class="person-card__body">
      <div class="person-card__body-control">
        <person-card-control></person-card-control>
      </div>
      <hr class="person-card__separator"/>
      <div class="person-card__sub-menu">
        <ul class="sub-menu">
          <router-link tag="li" 
                       class="sub-menu__item"
                       to="/person-card/__document">Заявки</router-link>
          <router-link tag="li" 
                       class="sub-menu__item"
                       to="/person-card/__crypto">Криптосредства</router-link>
          <router-link tag="li" 
                       class="sub-menu__item"
                       to="">Ресурсы</router-link>
          <router-link tag="li" 
                       class="sub-menu__item"
                       to="">Прочее</router-link>
        </ul>
      </div>
      <div class="person-card__props">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import personCardControl from '@/components/person/person-card/person-card__control'

export default {
  name: 'personCard',
  components: {
    personCardControl,
  },
  data: function() {
    return {
      personId: decodeURI(window.location.search.slice(window.location.search.indexOf("=") + 1))
    }
  },
  created: function() {
    console.log(this.personId);
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