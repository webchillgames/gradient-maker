<template>
  <div class="g-result" @click="selectText">
    <code>background-image: {{ result }}</code>

  </div>
</template>

<script>
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

  setup() {
    async function selectText(e) {
      try {
        await navigator.clipboard.writeText(e.target.innerText)
      } catch (e) {
        console.log(e)
      }
    }

    return {
      selectText
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
}
</style>
