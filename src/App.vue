<template>
  <div id="app">
    <div class="navigation"></div>
    <div class="system-out"></div>
    <div class="body">
      <router-view/>
    </div>
    <div class="footer">Copyright by Dontsov DA, 2020</div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  #app {
    display: grid;
    grid-template-areas: "navigation" "system-out" "body" "footer";
    grid-template-rows: 60px 20px auto 20px;
    grid-template-columns: 1fr;
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid black;

    .navigation {
      grid-area: navigation;
      border: 1px solid black;
    }
    .system-out {
      grid-area: system-out;
      border: 1px solid black;
    }
    .body {
      grid-area: body;
      border: 1px solid black;
    }
    .footer {
      grid-area: footer;
      border: 1px solid black;
    }
  }
</style>
