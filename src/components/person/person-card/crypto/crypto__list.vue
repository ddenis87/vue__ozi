<template>
  <div class="crypto-list">
    <table class="crypto-table">
      <caption class="crypto-table__title"><slot></slot></caption>
      <thead class="crypto-table__head">
        <tr class="crypto-table__head_row">
          <th class="crypto-table__head_column">№ п/п</th>
          <th class="crypto-table__head_column">Наименование</th>
          <th class="crypto-table__head_column">Установка</th>
          <!-- <th class="crypto-table__head_column">Основание</th> -->
          <th class="crypto-table__head_column">Акты</th>
          <th class="crypto-table__head_column">Удаление</th>
          <!-- <th class="crypto-table__head_column">Основание</th> -->
          <th class="crypto-table__head_column">Акты</th>
          <th rowspan="2" class="crypto-table__head_column crypto-table__head_column-action"></th>
        </tr>
      </thead>
      <tbody class="crypto-table__body">
        <tr class="crypto-table__body_row">
          <td class="crypto-table__body_column">1</td>
          <td class="crypto-table__body_column">ViPNet Client</td>
          <td class="crypto-table__body_column">Заявка № 1229 от 22.12.2017</td>
          <td class="crypto-table__body_column">
            <div class="control">
              <button class="control__button control__button_document" title="Просмотреть документ"></button>
              <button class="control__button control__button_delete" title="Удалить документ"></button>
            </div>
          </td>
          <td class="crypto-table__body_column">Заявка № 444 от 11.04.2019</td>
          <td class="crypto-table__body_column">
            <div class="control">
              <div></div>
              <button class="control__button control__button_upload" title="Удалить документ"></button>
            </div>
          </td>
          <!-- <td class="crypto-table__body_column"></td> -->
          <td class="crypto-table__body_column">
            <div class="control">
              <button class="control__button control__button_delete-row" title="Удалить запись"></button>
            </div>
          </td>
        </tr>
        <tr class="crypto-table__body_row">
          <td colspan="7" class="crypto-table__body_column crypto-table__body_column-end"><b>Примечание: </b>Установлен для личного использования</td>
        </tr>
        <tr class="crypto-table__body_row">
          <td class="crypto-table__body_column">2</td>
          <td class="crypto-table__body_column">ViPNet Cryptoservice</td>
          <td class="crypto-table__body_column">Заявка № 19 от 22.01.2017</td>
          <td class="crypto-table__body_column">
            <div class="control">
              <button class="control__button control__button_document-create" title="Загрузить документ"></button>
              <button class="control__button control__button_upload" title="Загрузить документ"></button>
            </div>
          </td>
          <td class="crypto-table__body_column"></td>
          <td class="crypto-table__body_column"></td>
          <td class="crypto-table__body_column"></td>
        </tr>
        <tr class="crypto-table__body_row">
          <td class="crypto-table__body_column">3</td>
          <td class="crypto-table__body_column">ViPNet CSP</td>
          <td class="crypto-table__body_column">Заявка № 1229 от 22.12.2017</td>
          <td class="crypto-table__body_column"></td>
          <td class="crypto-table__body_column"></td>
          <td class="crypto-table__body_column"></td>
          <td class="crypto-table__body_column"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'cryptoList',
}
</script>

<style lang="scss" scoped>
.crypto {
  &-list {
    font-family: 'Open sans';
    font-size: 13px;
  }
  &-table {
    width: 100%;
    // border-collapse: collapse;
    &__title {
      text-align: left;
      font-family: 'Montserrat';
      font-size: 14px;
      font-weight: bold;
      border-bottom: 1px solid grey;
    }
    &__head {
      &_column {
        padding: 2px;
        &-action {

          
        }
        &:nth-child(1) { width: 42px; }
        &:nth-child(3), &:nth-child(5) { width: 200px; }
        &:nth-child(4), &:nth-child(6) { width: 60px; }
        &:nth-child(3), &:nth-child(4) { background-color: lightblue; }
        &:nth-child(5), &:nth-child(6) { background-color: lightgreen; }
        &:nth-child(7) {
          width: 30px;
          // background-color: rgba(253, 73, 73, 0.796);
          background-image: url('~@/assets/images/control/action.png'); background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
        }

        
      }
    }
    &__body {
      &_column {
        padding: 5px 5px;
        &-end {
          border-bottom: 2px solid grey;
        }
        &:nth-child(3), &:nth-child(4) { background-color: rgba(173, 216, 230, .3); }
        &:nth-child(5), &:nth-child(6) { background-color: rgba(144, 238, 144, .3); }
        // &:nth-child(7) { background-color: rgba(255, 102, 0, 0.522); }
        .control {
          display: flex;
          justify-content: space-between;
          // padding: 0px 5px;
          &__button {
            width: 20px;
            height: 20px;
            border: 0px solid darkcyan;
            background-color: transparent;
            background-repeat: no-repeat;
            cursor: pointer;
            &_document { background-image: url('~@/assets/images/control/button_document.png'); background-size: contain; }
            &_document-create { background-image: url('~@/assets/images/control/button_document-create.png'); background-size: contain; }
            &_delete { background-image: url('~@/assets/images/control/button_delete_file2.png'); background-size: contain; }
            &_upload { background-image: url('~@/assets/images/control/button_upload_file2.png'); background-size: contain; }
            &_delete-row { background-image: url('~@/assets/images/control/button_delete.png'); background-size: contain; }

            
          }
         
        }
      }
    }
  }

}
</style>