<template>
  <div class="vpn-list">
    <table class="vpn-table">
      <caption class="vpn-table__title"><slot></slot></caption>
      <thead class="vpn-table-cs__head">
        <tr class="vpn-table-cs__head_row">
          <th class="vpn-table-cs__head_column">№ п/п</th>
          <th class="vpn-table-cs__head_column">Наименование</th>
          <th class="vpn-table-cs__head_column vpn-table-cs__head_column-basis install">Основание установки</th>
          <th class="vpn-table-cs__head_column vpn-table-cs__head_column-document install">Акты</th>
          <th class="vpn-table-cs__head_column vpn-table-cs__head_column-basis unistall">Основание удаления</th>
          <th class="vpn-table-cs__head_column vpn-table-cs__head_column-document unistall">Акты</th>
          <th class="vpn-table-cs__head_column crypto-table__head_column-action"></th>
        </tr>
      </thead>
      <tbody class="vpn-table-cs__body">
        <template v-for="(item, index) in listItem">
          <tr class="vpn-table-cs__body_row" :key="index + 1">
            <td class="vpn-table-cs__body_column">{{ index + 1 }}</td>
            <td class="vpn-table-cs__body_column">{{ item.VNAME }}</td>
            <td class="vpn-table-cs__body_column vpn-table-cs__body_column-basis install">
              <list-control-basis :basisProp="{...item, basisType: 'install'}"
                                  @basis-update="basisUpdate"></list-control-basis>
            </td>
            <td class="vpn-table-cs__body_column vpn-table-cs__body_column-document install">
              <crypto-vpn-list-control :upload="false"></crypto-vpn-list-control>
            </td>
            <td class="vpn-table-cs__body_column vpn-table-cs__body_column-basis unistall">
              <!-- <list-control-basis :basisText="item.VUNISTALLDOCNUMBER" :basisDate="item.VUNISTALLDOCDATE" ></list-control-basis> -->
            </td>
            <td class="vpn-table-cs__body_column vpn-table-cs__body_column-document unistall">
              <crypto-vpn-list-control :upload="true"></crypto-vpn-list-control>
            </td>
            <td class="vpn-table-cs__body_column">
              <div class="control">
                <button class="control__button control__button_delete-row" title="Удалить запись"></button>
              </div>
            </td>
          </tr>
          <tr class="vpn-table-cs__body_row" :key="index + 1 * 1000">
            <td colspan="9" class="vpn-table-cs__ody_column vpn-table-cs__body_column-end">
              <div class="note">
                <div class="note__item"><b>Примечание установки: </b>{{ (item.VINSTALLNOTE) ? item.VINSTALLNOTE : 'Отсутствует' }}</div>
                <div class="note__item"><b>Примечание удаления: </b>{{ (item.VUNISTALLNOTE) ? item.VUNISTALLNOTE : 'Отсутствует' }}</div>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
import CryptoVpnListControl from './list-control';
import ListControlBasis from './list-control_basis';

export default {
  name: 'vpnCsList',
  components: {
    CryptoVpnListControl,
    ListControlBasis,
  },
  props: {
    listItem: Array,
  },
  methods: {
    basisUpdate(option) {
      this.$store.dispatch('SET_VPN_BASIS_CS', option);
    },
  }
}
</script>

<style lang="scss" scoped>
.vpn-list {
    font-family: 'Open sans';
    font-size: 12px;
  .vpn-table {
    width: 100%;
    border-collapse: collapse;
    &__title {
      padding: 3px;
      border-bottom: 2px solid grey;
      text-align: left;
      font-family: 'Montserrat';
      font-size: 1.1em;
      font-weight: bold;
    }
    &-cs__head {
      &_row {
        .install { background-color: lightblue; }
        .unistall { background-color: lightgreen; }
      }
      &_column {
        padding: 3px;
        border-bottom: 2px solid grey;
        &:first-child { width: 42px; }
        &-basis {  width: 250px; }
        &-document { width: 70px; border-right: 2px solid darkgray; border-left: 1px solid darkgray; }
        &:last-child {
          width: 30px;
          background-image: url('~@/assets/images/view/action.png');
          background-size: 18px 18px;
          background-repeat: no-repeat;
          background-position: center;
        }
      }
    }
    &-cs__body {
      &_row {
        .install { background-color: rgba(173, 216, 230, .3); }
        .unistall { background-color: rgba(144, 238, 144, .3); }
      }
      &_column {
        padding: 3px 3px;
        &-document { border-right: 2px solid darkgray; border-left: 1px solid darkgray; }
      }
    }
  }
}
</style>