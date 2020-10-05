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
          <th class="crypto-table__head_column">Документ</th>
          <th class="crypto-table__head_column">Удаление</th>
          <!-- <th class="crypto-table__head_column">Основание</th> -->
          <th class="crypto-table__head_column">Документ</th>
          <th class="crypto-table__head_column">Примечание</th>
          <th class="crypto-table__head_column">Действия</th>
        </tr>
      </thead>
      <tbody class="crypto-table__body">
        <tr class="crypto-table__body_row">
          <td class="crypto-table__body_column">1</td>
          <td class="crypto-table__body_column">ViPNet Client</td>
          <td class="crypto-table__body_column">Заявка № 1229 от 22.12.2017</td>
          <td class="crypto-table__body_column">
            <div class="control">
              <button class="control__button control__button_document"></button>
              <button class="control__button control__button_delete"></button>
            </div>
          </td>
          <td class="crypto-table__body_column">Заявка № 444 от 11.04.2019</td>
          <td class="crypto-table__body_column"></td>
          <td class="crypto-table__body_column"></td>
        </tr>
        <tr class="crypto-table__body_row">
          <td class="crypto-table__body_column">2</td>
          <td class="crypto-table__body_column">ViPNet Cryptoservice</td>
          <td class="crypto-table__body_column">Заявка № 19 от 22.01.2017</td>
          <td class="crypto-table__body_column">
            <div class="control">
              <div></div>
              <button class="control__button control__button_upload"></button>
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
    &__title {
      text-align: left;
      font-family: 'Montserrat';
      font-size: 14px;
      font-weight: bold;
      border-bottom: 1px solid grey;
    }
    &__head {
      &_column {
        &:nth-child(1) { width: 42px; border: 1px solid darkcyan;}
        &:nth-child(3), &:nth-child(5) { width: 200px; border: 1px solid darkcyan;}
        &:nth-child(4), &:nth-child(6) { width: 70px; border: 1px solid darkgreen;}

        
      }
    }
    &__body {
      &_column {
        .control {
          display: flex;
          justify-content: space-between;
          padding: 0px 5px;
          &__button {
            width: 20px;
            height: 20px;
            border: 0px;
            background-color: white;
            &_document { background-image: url('~@/assets/images/control/button_document.png'); background-size: cover; }
            &_delete { background-image: url('~@/assets/images/control/button_delete_file.png'); background-size: contain; }
            &_upload { background-image: url('~@/assets/images/control/button_upload_file.png'); background-size: contain; }
          }
         
        }
      }
    }
  }

}
</style>