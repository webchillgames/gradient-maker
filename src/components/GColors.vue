<template>
  <div class="g-colors">
    <input v-model="first" type="text" @input="$emit('change-colors', { first, second })" />
    <input v-model="second" type="text" @input="$emit('change-colors', { first, second })" />
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  emits: ['change-colors'],
  setup() {
    const first = ref('#008F7A')
    const second = ref('#0089BA')

    return {
      first,
      second
    }
  }
}
</script>

<style lang="scss">
.g-colors {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  input {
    margin: 16px;
    border-radius: 8px;
    border: none;
    font-size: inherit;
    line-height: inherit;
    padding: 8px;
    box-shadow: $shadow;
    display: flex;
  }

  &__color {
    margin-top: 30px;
    display: flex;
    align-items: center;
  }

  @media (max-width: 480px) {
  }
}
</style>
