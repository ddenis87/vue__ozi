<template>
  <div class="ozi">
    <div class="ozi-head">
      <div></div>
      <div class="ozi-head__statistic">
        <h4>Сводная статистика</h4>
        <span>Всего входящих документов: 455</span>
        <span>Всего исходящих документов: 120</span>
      </div>
    </div>
    <h1>Hello</h1>
    <h2>Hello</h2>
    <h3>Hello</h3>
    <h4>Hello</h4>
    <h5>Hello</h5>
    <h6>Hello</h6>
  </div>
</template>

<script>

export default {
  name: "ozi",
}
</script>

<style lang="scss" scoped>
.ozi {
  font-family: 'Montserrat';
  font-size: 14px;
  &-head {
    padding: 0px 20px;
    display: flex;
    justify-content: space-between;
    &__statistic {
      padding-left: 10px;
      padding-bottom: 8px;
      display: inline-flex;
      flex-direction: column;
      border-left: 1px solid rgb(54, 96, 146);
      border-bottom: 1px solid rgb(54, 96, 146);
    }
  }
}
</style>