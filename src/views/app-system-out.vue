<template>
  <div class="system-out" :class="state">
    <div class="system-out__item system-out__title">Сообщения системы:</div>
    <div class="system-out__item system-out__text">{{ systemText }}</div>
  </div>
</template>

<script>
export default {
  name: 'SystemOut',
  computed: {
    systemText() {
      return this.$store.state.systemout.text;
    },
    state() {
      return 'system-out__' + this.$store.state.systemout.status;
    }
  } 
}
</script>

<style lang="scss" scoped>
  .system-out {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5px;

    font-size: 0.9em;
    &__item {padding-right: 5px;}
    &__default {
      color: teal;
      background-color: white;
    }
    &__warning {
      color: white;
      background-color: firebrick;
    }
    &__information {
      color: teal;
      background-color: lightyellow;
    }
    &__successfully {
      color: black;
      background-color: lightgreen;
    }
  }

</style>