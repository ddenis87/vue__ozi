<template>
  <div class="report">
    <h3 class="report__title">Отчеты - Еженедельные отчеты</h3>

    <div class="report__body">
      <div class="report__body-control">
        <report-control>
          <template v-slot:titleInput>Наименование задачи</template>
          <template v-slot:titleSelect>Статус</template>
        </report-control>
      </div>
      <hr class="report__separator"/>
      <div class="report__body-list">
        <report-list :listItem="listItem"></report-list>
      </div>
    </div>
  </div>
</template>

<script>
import reportControl from '@/components/report/report__control-week';
import reportList from '@/components/report/report__list-week';

export default {
  name: 'reportWeek',
  components: {
    reportControl,
    reportList,
  },
  data: function() {
    return {
      listItem: [
        {ID: '1', CNAMEAUTOR: 'Донцов Д.А.', CNAMETASK: 'Корректировка уровней доступа - Интернет', CSTATUS: 'Без статуса'},
        {ID: '2', CNAMEAUTOR: 'Корчмит А.А.', CNAMETASK: 'Создание связей ViPNet', CSTATUS: 'Без статуса'},
        {ID: '3', CNAMEAUTOR: 'Корчмит А.А.', CNAMETASK: 'Смена мастер-ключа', CSTATUS: 'В работе'},
        {ID: '4', CNAMEAUTOR: 'Давыдов А.Ю.', CNAMETASK: 'Смена парольной документации ПК КС', CSTATUS: 'Завершено'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.report {
  font-family: 'Montserrat';
  &__title {
    margin-bottom: 10px;
    color: darkslategrey;
  }
  &__separator {
    margin: 10px 20px;
  }
}
</style>