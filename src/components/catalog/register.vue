<template>
  <div class="register">
    <table class="register-table">
      <tr class="table-title">
        <th class="table-title__col_width-index">№ п/п</th>
        <th class="table-title__col">Наименование</th>
        <th class="table-title__col_width-prop">Верификация</th>
        <th class="table-title__col_width-prop">Активна</th>
        <th class="table-title__col_width-prop">Действия</th>
      </tr>
      <tr><td colspan="5"><hr></td></tr>
      <template v-for="(rowCatalog, index) in arrList">
      <tr :key="index">
        <td align="center">{{ index + 1 }}</td>
        <td>{{ rowCatalog.CNAME }}</td>
        <td align="center" 
            v-bind:class="{'td-verificate': (rowCatalog.CCONFIRM == '1') ? true : false}">
            {{ (rowCatalog.CCONFIRM == '1') ? 'Да' : 'Нет' }}
        </td>
        <td align="center" 
            v-bind:class="{'td-disable': (rowCatalog.CVISIBLE == '0') ? true : false }">
            {{ (rowCatalog.CVISIBLE == '1') ? 'Да' : 'Нет' }}
        </td>
        <td>
          <div class="control">
          <button class="control__button"
                  v-bind:title="(rowCatalog.CVISIBLE == '0') ? 'Активировать' : 'Деактивировать'" 
                  v-bind:class="{
                    'control__button_visible-on': (rowCatalog.CVISIBLE == '1') ? true : false,
                    'control__button_visible-off': (rowCatalog.CVISIBLE == '0') ? true : false
                  }" ></button>
          <button class="control__button control__button_delete" title="Удалить запись"></button>
          </div>
        </td>
      </tr>
      <tr :key="index + 100"><td colspan="5"><hr></td></tr>
      </template>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data: function() {
    return {
      arrList: [
        {CNAME: 'Заявка на доступ к сети Интернет', CCONFIRM: '0', CVISIBLE: '1'},
        {CNAME: 'Заявка на установку криптосредства', CCONFIRM: '1', CVISIBLE: '1'},
        {CNAME: 'Заявка на доступ к ПК Персо', CCONFIRM: '0', CVISIBLE: '0'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .register-table {
    width: 100%;
    font-size: 0.8em;

    .table-title {

      &__col {
        &_width {
          &-prop { width: 100px; }
          &-index { width: 45px; }
        }
      }
    }
  }

  .control {
    display: flex;
    justify-content: space-around;
    align-items: center;

    &__button {
      width: 20px;
      height: 20px;
      outline: none;
      border: 0px solid grey;
      background-color: white;
      background-size: 22px 22px;
      background-repeat: no-repeat;
      background-position: center center;
      cursor: pointer;

      &_visible-on { background-image: url('/img/button_visible-off.png'); }
      &_visible-off { background-image: url('/img/button_visible-on.png'); }
      &_delete { background-image: url('/img/button_delete.png'); }
    }
  }

// hr {
//   margin: 0px;
// }

// table {
//   width: 100%;
//   border-spacing: 0px 3px;
// }

// th, td {
//   border-left: 2px solid grey;
//   padding: 3px;
// }

// th:first-child, td:first-child {border: 0px;}

// .td-disable {background-color: coral;}
// .td-verificate {background-color: lightgreen;}

// .button-row-control {
//   width: 20px;
//   height: 20px;
//   margin: 0px 3px;
//   border: 0px solid black;
//   background-color: white;
//   outline: none;
//   cursor: pointer;
// }

// .button-row-delete {
//   background-image: url('/img/button-row-delete.png');
//   background-size: 20px 20px;
//   background-repeat: no-repeat;
// }


// .button-row-disable-on {
//   background-image: url('/img/button-row-disable-off.png');
//   background-size: 22px 22px;
//   background-repeat: no-repeat;
// }

// .button-row-disable-off {
//   background-image: url('/img/button-row-disable-on.png');
//   background-size: 22px 22px;
//   background-repeat: no-repeat;
// }
</style>