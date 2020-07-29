<template>
  <div id="app" class="app">
      <div class="app__navigation">
        <app-navigation></app-navigation>
      </div>
      <div class="app__system-out">
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
}
</script>

<style lang="scss">
  .app {
    display: grid;
    grid-template-areas: "app__navigation" "app__system-out" "app__body" "app__footer";
    grid-template-rows: auto auto auto auto;
    grid-template-columns: 1fr;
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;

    font-family: 'Times New Roman', Times, serif;
    font-size: 16px;

    &__navigation {
      grid-area: app__navigation;
      z-index: 999;
    }
    &__system-out {
      grid-area: app__system-out;
      border-top: 1px solid grey;
      border-bottom: 1px solid grey;
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
