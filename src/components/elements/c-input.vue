<template>
  <div class="c-input">
    <label class="c-input__title"><slot></slot></label>
    <input class="c-input__input" 
           type="text"
           :disabled="disabled"
           :class="{'validation': isEmpty}"
           v-model="inputValue"
           @input="setInputValue"
           @keydown="enteredValue" />
  </div>
</template>

<script>
export default {
  name: 'cInput',
  props: {
    inValidation: Boolean,
    value: String,
    disabled: Boolean,
  },
  computed: {
    isEmpty() { return this.inValidation; }
  },
  data: function() {
    return {
      inputValue: '',
    }
  },
  created: function() {
    this.inputValue = this.value;
  },
  methods: {
    setInputValue() {
      this.$emit('input', this.inputValue);
    },
    enteredValue(event) {
      this.$emit('keydown', event.key);
    },
    resetComponent() {
      this.inputValue = '';
      this.setInputValue();
    }
  }
}
</script>

<style lang="scss" scoped>
.c-input {
  position: relative;
  &__title {
    position: absolute;
    left: 5px;
    top: 5px;
    font-size: 8px;
    text-transform: uppercase;
  }
  &__input {
    left: 0px;
    top: 0px;
    width: 100%;
    padding: 3px;
    padding-left: 5px;
    padding-top: 16px;
    font-size: 14px;
    border: 1px solid grey;
    border-radius: 3px;
    box-sizing: border-box;
    outline: none;
    &:focus {
      box-shadow: 1px 1px 1px lightblue, -1px -1px 1px lightblue;
    }
  }
  .validation {
    box-shadow: 1px 1px 1px red, -1px -1px 1px red;
  }
}
</style>