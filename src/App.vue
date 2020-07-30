<template>
  <div id="app" class="app" @scroll="scrollPage">
      <div class="app__navigation" :class="{'app__navigation--fixed' : isFixed}">
        <app-navigation></app-navigation>
      </div>
      <div class="app__system-out" :class="{'app__system-out--fixed' : isFixed}">
        <system-out></system-out>
      </div>
      <div class="app__body">
        <router-view/>
      </div>
      <div class="app__footer">
        Copyright by Dontsov DA, 2020
      </div>
  </div>
</template>

<script>
import AppNavigation from '@/views/app-navigation';
import SystemOut from '@/views/app-system-out';
export default {
  components: {
    AppNavigation, SystemOut,
  },
  data: function() {
    return {
      isFixed: false,
    }
  },
  created: function() {
    window.addEventListener('scroll', this.scrollPage);
  },
  methods: {
    scrollPage: function() {
      console.log(window.scrollY);
      if (window.scrollY == 0) {
        this.isFixed = false;
      } else {
        this.isFixed = true;
      }
    }
  }
}
</script>

<style lang="scss">
  @import url('/fonts?family=Montserrat:ital,wght@0,300;0,400;0,500;0,700;1,300;1,500;1,700&display=swap');
  body {margin-top: 0px; overflow-y: scroll;}

  .app {
    display: grid;
    grid-template-areas: "app__navigation" "app__system-out" "app__body" "app__footer";
    grid-template-rows: 60px 40px auto auto;
    grid-template-columns: 1fr;
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;

    &__navigation {
      grid-area: app__navigation;
      position: fixed;
      max-width: 1280px;
      width: 100%;
      background-color: white;
      border: 1px solid white;
      z-index: 100;
    }

    &__system-out {
      grid-area: app__system-out;
      position: fixed;
      max-width: 1280px;
      width: 100%;
      top: 61px;
      border-top: 1px solid grey;
      border-bottom: 1px solid grey;
      background-color: white;
      z-index: 99;
    }

    &__body {
      grid-area: app__body;
      padding: 5px;
    }
    &__footer {
      grid-area: app__footer;
      margin-top: 5px;
      padding: 3px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-top: 1px solid grey;
      border-bottom: 1px solid grey;
      color: grey;
      font-size: 0.8em;
    }
  }
</style>
