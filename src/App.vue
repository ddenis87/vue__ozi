<template>
  <div id="app" class="app">
    <div class="app__head">
      <app-head></app-head>
    </div>
    <div class="app__navigation" :class="fullPage">
      <app-navigation></app-navigation>
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
import axios from 'axios';

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
  computed: {
    fullPage() { return (this.$route.meta.layout) ? `app__navigation_${this.$route.meta.layout}` : ''; },
  },
  created: function() {
    axios 
      .post(pathBackend + 'index.php', null, {params: {function: 'getUserSecurity'}})
      .then(response => {
        let option = {
          userId: response.data[0].ID,
          userIp: response.data[0].CIP,
          userNameFull: response.data[0].CNAMEFULL,
          userNameShort: response.data[0].CNAMESHORT,
          userLevelAccess: response.data[0].CLEVELACCESS
        }
        this.$store.commit('setUserProfile', option);

      })
  }
}
</script>

<style lang="scss">
@import 'fonts.scss';
@import 'variables.scss';

html, body {
  margin: 0px;
  padding: 0px;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0px;
  padding: 0px;
}
h3 {
  font-size: 16px;
}

a {
  text-decoration: none;
  color: darkslateblue;
}

.app {
  display: grid;
  grid-template-areas: "head head" 
                       "navigation body"
                       "footer footer";
  grid-template-columns: auto 1fr;
  grid-template-rows: 80px auto 20px;
  width: 100%;
  min-width: $pageMinWidth;
  margin-left: auto;
  margin-right: auto;
  
  &__head {
    grid-area: head;
  }
  &__navigation {
    grid-area: navigation;
    width: 250px;
    transition: width .5s;
    &_full-page {
      width: 40px;
    }
  }
  &__system-out {
    grid-area: system-out;
    padding: 3px;
    border-bottom: 1px solid $colorMain;
    box-sizing: border-box;
  }
  &__body {
    grid-area: body;
    min-height: calc(100vh - 100px);
    padding-top: 10px;
    padding-right: 20px;
    box-sizing: border-box;
  }
  &__footer {
    grid-area: footer;
  }
}
@media print {
  .app {
    grid-template-areas: "body";
    grid-template-columns: 700px;
    grid-template-rows: auto;
    &__head { display: none; }
    &__navigation { display: none; }
    &__footer { display: none; }
    &__body {
      min-height: auto;
      height: auto;
    }
  }
}
</style>
