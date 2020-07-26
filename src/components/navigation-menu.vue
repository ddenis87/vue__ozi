<template>
  <div class="menu">
    
    <div class="menu-button">
      <img class="menu-button__images" src="@/assets/img/menu.png">
      <div class="menu-button__text">Menu</div>
    </div>
    <div class="menu-drop">
      <ul class="menu-drop-list">
        <li class="menu-drop-list__item">Catalog</li>
        <li class="menu-drop-list__item">Journal</li>
        <li class="menu-drop-list__item">Consolidation</li>
      </ul>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'NavigationMenu',
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
    border-radius: 5px;
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
    width: 200px;
    height: auto;
    border: 1px solid grey;
    border-radius: 5px;
    background-color: white;
    opacity: 0;
    transition: opacity 0.3s ;
  }

  .menu:hover .menu-drop {
    opacity: 1;
  }
</style>