<template>
  <div class="g-result">
    <code ref="codeRef">background-image: {{ result }};</code>

    <button type="button" @click="copy">{{ action }}</button>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
export default {
  props: {
    result: {
      type: String,
      required: true
    },
    isRadial: {
      type: Boolean,
      required: true
    }
  },

  setup(props) {
    const action = ref('Copy')
    const codeRef = ref()

    watch(() => props.result, () => {action.value = 'Copy'})

    async function copy() {
      let range = new Range()
      range.setStart(codeRef.value, 0)
      range.setEnd(codeRef.value, 1)
      document.getSelection().addRange(range)

      try {
        navigator.clipboard.writeText(range)
        action.value = 'Copied!'
      } catch (e) {
        console.log(e)
      }
    }

    return {
      codeRef,
      action,
      copy
    }
  }
}
</script>

<style lang="scss">
.g-result {
  background-color: rgba(189, 189, 189, 0.1);
  border-left: 2px solid #fff;
  border-radius: 4px;
  margin: 30px 0;
  padding: 16px;

  code {
    display: block;
    text-align: left;
  }

  button {
    cursor: pointer;
    margin-top: 16px;
    border: none;
    border-radius: 4px;
    color: #fff;
    padding: 8px;
    background-color: rgba(189, 189, 189, 0.5);

    &:hover {
      background-color: rgba(189, 189, 189, 0.6);
    }

    &:active {
      background-color: rgba(189, 189, 189, 0.8);
    }
  }
}
</style>
