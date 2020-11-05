<template>
  <div class="vpn-dialog-basis">
    <h3 class="vpn-dialog-basis__title"><slot></slot></h3>
    <div class="vpn-dialog-basis__list">
      <table class="basis-table">
        <caption class="basis-table__title">Входящие документы</caption>
        <thead class="basis-table__head">
          <tr class="basis-table__head_row">
            <th class="basis-table__head_column"><input type="radio" checked/></th>
            <th class="basis-table__head_column">№ вх.</th>
            <th class="basis-table__head_column">Дата</th>
            <th class="basis-table__head_column">Наименование</th>
            <th class="basis-table__head_column">Примечание</th>
          </tr>
        </thead>
        <tbody class="basis-table__body">
          <template v-for="(item, index) in listUserDocumentInput">
            <tr class="basis-table__body_row" :key="index">
              <td class="basis-table__body_column">
                <input class="basis-table__body_column-radio" 
                       type="radio" 
                       name="basis" 
                       :id="'basis' + index" 
                       :value="item.VID"
                       v-model="basisSelected"/>
              </td>
              <td class="basis-table__body_column">{{ item.VNUMBERDOC }}</td>
              <td class="basis-table__body_column">{{ item.VDATE }}</td>
              <td class="basis-table__body_column">{{ item.VNAME }}</td>
              <td class="basis-table__body_column">{{ item.VNOTE }}</td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    <div class="vpn-dialog-basis__control">
      <c-button class="vpn-dialog-basis__control_item" @click="updateBasis">Применить</c-button>
      <c-button class="vpn-dialog-basis__control_item" @click="updateBasis(1)">Очистить основание</c-button>
      <c-button class="vpn-dialog-basis__control_item" @click="$emit('cancel-update')">Отменить</c-button>
    </div>
  </div>
</template>

<script>
import cButton from '@/components/elements/c-button';

export default {
  name: 'DialogBasis',
  components: {
    cButton
  },
  props: {
    dialogProps: Object,
  },
  computed: {
    listUserDocumentInput() { return this.$store.getters.GET_USER_DOCUMENT_INPUT; },
  },
  data() {
    return {
      basisSelected: this.dialogProps.valueDocumentId,
    }
  },
  methods: {
    updateBasis(clear) {
      let option = {
        valueId: this.dialogProps.valueId,
        valueType: this.dialogProps.valueType,
        valueDocumentId: (clear) ? null : this.basisSelected,
      }
      this.$emit('update-basis', option);
    },
  }
}
</script>

<style lang="scss" scoped>
$minWidth: 700px;
.vpn-dialog-basis {
  position: fixed;
  top: calc(50% - 150px);
  left: calc(50% - 350px) ;
  display: block;
  width: auto;
  height: auto;
  max-height: 300px;
  padding: 10px;
  min-width: $minWidth;
  border: 2px solid grey;
  border-radius: 3px;
  box-shadow: 1px 1px 1px black;
  background-color: white;

  font-size: 12px;
  font-family: 'Montserrat';
  &__title {
    color: black;
    margin-bottom: 10px;
  }
  &__list {
    margin-bottom: 20px;
    max-height: 200px;
    overflow-y: scroll;
    .basis-table {
      width: calc(100% - 5px);
      border-collapse: collapse;
      font-family: 'Open sans';
      &__title {
        text-align: left;
        
        font-weight: bold;
        border-bottom: 2px solid grey;
      }
      &__head {
        &_column {
          padding: 3px;
          border-bottom: 1px solid grey;
          &:nth-child(1) { width: 20px; }
          &:nth-child(3) { width: 70px; }
        }
      }
      &__body {
        &_row:hover {
          background-color: lightblue;
          // cursor: pointer;
        }
        &_column {
          padding: 3px;
          border-bottom: 1px solid grey;
          &:nth-child(1) { text-align: center; }
          &:nth-child(2) { text-align: center; }

          &-radio { cursor: pointer; }
        }
      }
    }
  }
  &__control {
    display: flex;
    justify-content: space-between;
    &_item {
      min-width: 100px;
    }
  }
}
</style>