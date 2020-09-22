<template>
  <div class="menu">
    <div class="menu-button">
      <img class="menu-button__images" src="@/assets/img/menu.png">
      <div class="menu-button__text">Menu</div>
    </div>
    <div class="menu-drop">
      <ul class="menu-drop-list">
        <template v-for="(rowMenu, index) in arrMenu">
          <li class="menu-drop-list__items" 
              :key="index"
              :class="{'menu-drop-list__items_title' : (rowMenu.CURL) ? false : true}">
          <template v-if="rowMenu.CURL">
            <router-link :to="rowMenu.CURL" class="menu-drop-list__link">{{ rowMenu.CNAME }}</router-link>
          </template>
          <template v-else>
            {{ rowMenu.CNAME }}
          </template>
          </li>
        </template>
      </ul>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'NavigationMenu',
  data: function() {
    return {
      arrMenu: Array,
    }
  },
  created: function() {
    let axios = require('axios').default;
    axios
      .post(pathBackend + 'index.php', null, {params: {function: 'getMenu'}})
      .then((response) => {this.arrMenu = response.data;})
      .catch(() => {
        this.arrMenu = [
          {CNAME: 'Входящие документы', CURL: '/catalog/document-input'},
          {CNAME: 'Исходящие документы', CURL: '/catalog/document-output'},
        ]
      })
  },
}
</script>

<style lang="scss" scoped>
  $buttonWidth: 150px;
  $buttonHeight: 30px;
  .menu {
    position: relative;
    width: $buttonWidth;
    height: $buttonHeight;
  }

  .menu-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: $buttonWidth;
    padding: 3px 10px;
    border: 1px solid gray;
    background-color: lightgreen;
    border-radius: 3px;
    box-sizing: border-box;
    cursor: pointer;
    &__text {
      text-transform: uppercase;
    }
    &__images {
      width: auto;
      height: $buttonHeight;
    }
  }
  .menu-drop {
    width: 260px;
    height: 0px;
    border: 0px solid grey;
    border-radius: 3px;
    background-color: white;
    opacity: 0;
    overflow: hidden;
    transition: opacity 0.3s;

    &-list {
      margin: 0px;
      padding: 0px;

      &__items {
        list-style: none;
        padding: 3px;
        padding-left: 10px;
        border-bottom: 1px solid grey;
        cursor: pointer;
        transition: padding-left 0.3s;

      }
      
      &__items:last-child { border: 0px; }
      &__items:hover { text-decoration: none; color: black; padding-left: 20px;}
      &__items_title { padding-left: 3px; font-weight: bold; cursor: default; font-size: 14px;}
      &__items_title:hover { padding-left: 3px; }
      &__link { text-decoration: none; color: black; font-size: 14px;}
      
    }
  }

  .menu:hover .menu-drop {
    opacity: 1;
    height: auto;
    border: 1px solid grey;
  }
</style>