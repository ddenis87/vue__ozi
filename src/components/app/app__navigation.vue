<template>
  <div class="app-navigation" :class="fullPage">
    <div class="navigation-box">
      <ul class="navigation-list">
        <template v-for="(item, index) in listItem">
          <li class="navigation-list__item"
              v-if="item.CURL" 
              :key="index">
            <router-link :to="item.CURL">{{ item.CNAME }}</router-link>
          </li>
          <li v-else 
              :key="index"
              class="navigation-list__title">{{ item.CNAME }}</li>
        </template>
        <li class="navigation-list__item" @click="() => {$router.push('/')}">На главную</li>
      </ul>
    </div>
    
    <div class="short-menu">
      <img class="short-menu__images" src="@/assets/images/menu.png"/>
    </div>
  </div>  
</template>

<script>
import axios from 'axios';
export default {
  name: 'appNavigation',
  computed: {
    fullPage() { return (this.$route.meta.layout) ? `app-navigation_${this.$route.meta.layout}` : ''; },
  },
  data: function() {
    return {
      listItem: Array,
    }
  },
  created: function() {
    axios
      .post(pathBackend + 'index.php', null, {params: {function: 'getMenu'}})
      .then(response => {
        this.listItem = response.data;
      })
      .catch(() => {
        this.listItem = [
          // {CURL: '/', CNAME: 'На главную'},
          {CURL: '', CNAME: 'Справочники'},
          {CURL: '/catalog__district', CNAME: 'Территориальные органы'},
          {CURL: '/catalog__department', CNAME: 'Отделы'},
          {CURL: '/catalog__post', CNAME: 'Должности'},
          {CURL: '/catalog__document-input', CNAME: 'Входящие документы'},
          {CURL: '/catalog__document-output', CNAME: 'Исходящие документы'},
          {CURL: '', CNAME: 'Журналы'},
          {CURL: '/person', CNAME: 'Пользователи'},
          {CURL: '/report/cryptovpn-cl', CNAME: 'Пользователи ViPNet Client'},
          {CURL: '', CNAME: 'Отчеты'},
          {CURL: '/report-week', CNAME: 'Неделя'},
        ];
      })
  }
}
</script>

<style lang="scss" scoped>
.app-navigation {
  display: inline-flex;
  width: 250px;
  font-size: 14px;
  height: calc(100vh - 100px);
  overflow: hidden;
  box-sizing: border-box;
  z-index: 999;
  .navigation-box {
    overflow: hidden;
    background-color: white;
    transition: width .5s;
    z-index: 999;
    .navigation-list {
      width: 250px;
      padding-left: 10px;
      overflow: hidden;
      &__item {
        display: flex;
        padding: 3px 5px;
        align-items: center;
        list-style: none;
        border-top: 1px solid white;
        border-bottom: 1px solid white;
        font-size: 12px;
        font-weight: bold;
        color: darkslateblue;
        text-transform: uppercase;
        cursor: pointer;
        &:hover {
          border-top: 1px solid grey;
          border-bottom: 1px solid grey;
          background-image: linear-gradient(90deg, lightgray, white);
        }
      }
      &__title {
        padding: 3px 0px;
        font-weight: bold;
        color: black;
        list-style: none;
        text-transform: uppercase;
      }
    }
  }
  .short-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 0px;
    height: 100%;
    background-color: lightgray;
    overflow: hidden;
    transition: width .5s;
    z-index: 888;
    &__images {
      width: 30px;
      height: 20px;
      transform: rotate(90deg);
    }
  }

  &_full-page {
    position: fixed;
    width: 30px;
    transition: all .5s;
    .navigation-box {
      width: 0px;
    }
    .short-menu {
      width: 25px;
    }
    &:hover { 
      width: 250px;
      .navigation-box { width: 250px; }
    }
  }
}
</style>