<template>
  <div class="app-navigation">
    <ul class="navigation">
      <template v-for="(item, index) in listItem">
        <router-link v-if="item.CURL" 
                     :key="index" 
                     :to="item.CURL"
                     tag="li" 
                     class="navigation__item">
          {{ item.CNAME }}
        </router-link>
        <li v-else 
            :key="index"
            class="navigation__title">
          {{ item.CNAME }}
        </li>
      </template>
      <li class="navigation__item" @click="() => {$router.push('/')}">
        На главную
      </li>
    </ul>
  </div>  
</template>

<script>
import axios from 'axios';
export default {
  name: 'appNavigation',
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
          {CURL: '/catalog__department', CNAME: 'Отделы'},
          {CURL: '/catalog__document-input', CNAME: 'Входящие документы'},
          {CURL: '', CNAME: 'Журналы'},
          {CURL: '/person', CNAME: 'Пользователи'},
          {CURL: '', CNAME: 'Отчеты'},
          {CURL: '/report-week', CNAME: 'Неделя'},
        ];
      })
  }
}
</script>

<style lang="scss" scoped>
.app-navigation {
  padding-right: 20px;
  font-size: 14px;
  .navigation {
    padding-left: 10px;
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
</style>