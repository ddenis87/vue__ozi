<template>
  <div id="app" class="app">
    <div class="app__head">
      <app-head></app-head>
    </div>
    <div class="app__navigation">
      <app-navigation></app-navigation>
    </div>
    <div class="app__system-out">
      <app-system-out></app-system-out>
    </div>
    <div class="app__body">
      <router-view />
    </div>
    <div class="app__footer">
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import appHead from '@/components/app/app__head';
import appNavigation from '@/components/app/app__navigation';
import appSystemOut from '@/components/app/app__system-out';
import appFooter from '@/components/app/app__footer';
export default {
  components: {
    appHead,
    appNavigation,
    appSystemOut,
    appFooter,
  },
}
</script>

<style lang="scss">
@import 'fonts.scss';

html, body {
  margin: 0px;
  padding: 0px;
}

.app {
  display: grid;
  grid-template-areas: "head head" 
                       "navigation system-out"
                       "navigation body" 
                       "footer footer";
  grid-template-columns: 250px 1fr;
  grid-template-rows: 80px 20px auto 20px;
  width: 100%;
  min-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  &__head {
    grid-area: head;
  }
  &__navigation {
    grid-area: navigation;
  }
  &__system-out {
    grid-area: system-out;
  }
  &__body {
    grid-area: body;
    min-height: calc(100vh - 120px);
    border: 1px solid darkblue;
  }
  &__footer {
    grid-area: footer;
  }
}
</style>
