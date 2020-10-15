<template>
  <div class="c-checkbox">
    <label class="c-checkbox__title">
      <div class="level"><slot name="accessOff"></slot></div>
      <input class="c-checkbox__checkbox"
             type="checkbox"
             v-model="checkedValue"
             @change="setCheckboxValue"/>
      <div class="c-checkbox__slider">
        <div class="c-checkbox__slider-item"></div>
      </div>
      <div class="level"><slot name="accessOn"></slot></div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'cCheckboxDouble',
  model: {
    prop: 'checked',
    event: 'change'
  },
  data() {
    return {
      checkedValue: false,
    }
  },
  methods: {
    setCheckboxValue() {
      this.$emit('change', this.checkedValue);
    }
  }
}
</script>

<style lang="scss" scoped>
.c-checkbox {
  &__title {
    display: inline-flex;
    align-items: center;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    color: rgba(0,0,0, .8);
    cursor: pointer;
    .level { padding-top: 2px;  }
  }
  display: inline-flex;
  align-items: center;
  &__checkbox {
    position: absolute;
    opacity: 0;
    z-index: -1;
    & + .c-checkbox__slider {
      display: flex;
      align-items: center;
      margin-right: 10px;
      margin-left: 10px;
      padding: 2px 4px;
      width: 40px;
      height: 20px;
      border: 1px solid grey;
      border-radius: 10px;
      box-sizing: border-box;
      transition: 0.4s;
      .c-checkbox__slider-item {
        width: 12px;
        height: 12px;
        border-radius: 8px;
        border: 1px solid darkgrey;
        background-color: darkgrey;
        box-sizing: border-box;
      }
    }
    &:checked {
      & + .c-checkbox__slider {
        padding-left: 22px;
        .c-checkbox__slider-item {
          border: 1px solid rgb(54, 96, 146);
          background-color:  rgb(54, 96, 146);
        }
      }
    }
  }
}
</style>