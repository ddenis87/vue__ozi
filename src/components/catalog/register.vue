<template>
  <div class="register">
      <table>
      <tr>
        <th width="45px">№ п/п</th>
        <th>Наименование</th>
        <th width="100px">Верификация</th>
        <th width="100px">Активна</th>
        <th width="100px">Действия</th>
      </tr>
      <tr><td colspan="5"><hr></td></tr>
      <template v-for="(rowCatalog, index) in arrCatalog">
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
        <td align="right">
          <button class="button-row-control"
                  v-bind:title="(rowCatalog.CVISIBLE == '0') ? 'Активировать' : 'Деактивировать'" 
                  v-bind:class="{
                    'button-row-disable-on': (rowCatalog.CVISIBLE == '1') ? true : false,
                    'button-row-disable-off': (rowCatalog.CVISIBLE == '0') ? true : false
                  }" ></button>
          <button class="button-row-control button-row-delete" title="Удалить запись"></button>
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
}
</script>

<style lang="scss" scoped>
hr {
  margin: 0px;
}

table {
  width: 100%;
  border-spacing: 0px 3px;
}

th, td {
  border-left: 2px solid grey;
  padding: 3px;
}

th:first-child, td:first-child {border: 0px;}

.td-disable {background-color: coral;}
.td-verificate {background-color: lightgreen;}

.button-row-control {
  width: 20px;
  height: 20px;
  margin: 0px 3px;
  border: 0px solid black;
  background-color: white;
  outline: none;
  cursor: pointer;
}

.button-row-delete {
  background-image: url('/img/button-row-delete.png');
  background-size: 20px 20px;
  background-repeat: no-repeat;
}

.button-row-disable-on {
  background-image: url('/img/button-row-disable-off.png');
  background-size: 22px 22px;
  background-repeat: no-repeat;
}

.button-row-disable-off {
  background-image: url('/img/button-row-disable-on.png');
  background-size: 22px 22px;
  background-repeat: no-repeat;
}
</style>