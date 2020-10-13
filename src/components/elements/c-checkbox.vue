<template>
  <div class="c-checkbox">
    <label class="c-checkbox__title">
      <input class="c-checkbox__checkbox"
             type="checkbox"
             :value="inValue"
             v-model="valueChecked"
             @change="setInputValue(valueChecked)" />
      <div class="c-checkbox__slider">
        <div class="c-checkbox__slider-item"></div>
      </div>
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  name: 'cCheckbox',
  model: {
    prop: 'checked',
  //   event: 'change'
  },
  props: {
    inValue: String,
    inValueChecked: String
  },
  computed: {
    cValueChecked: {
      get() { return (this.inValueChecked == '1') ? true : false },
      set(newValue) { this.valueChecked = newValue; }
    }
  },
  data() {
    return {
      valueChecked: this.cValueChecked,
    }
  },
  beforeUpdate() { this.valueChecked = this.cValueChecked; },
  methods: {
    setInputValue(item) {
      // this.cValueChecked = item;
      // console.log(item);
      // console.log(this.valueChecked);
      // this.$emit('change', this.cChecked);
    },
  }
}
</script>

<style lang="scss" scoped>
.c-checkbox {
  &__title {
    display: inline-flex;
    align-items: center;
    font-size: 10px;
    font-weight: bold;
    text-transform: uppercase;
    color: rgba(0,0,0, .8);
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
      margin-right: 5px;
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
        border: 1px solid grey;
        border-radius: 8px;
        background-color: grey;
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