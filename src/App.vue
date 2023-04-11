<template>
  <div ref="pageRef" class="g-maker">
    <h2>Create your own gradient</h2>
    <section>
      <h3>Choose orientation</h3>
      <GOrientations @change-orientation="changeOrientation" />
    </section>
    <section>
      <h3>Enter colors</h3>
      <GColors @changeColors="changeColors" />
    </section>
    <button
      :disabled="!first || !second || !orientation"
      type="button"
      class="g-maker__generate"
      @click="changeBackground(first, second, orientation)"
    >
      Generate
    </button>

    <GResult
      v-if="first && second && orientation"
      :isRadial="orientation === 'circle'"
      :result="result"
    />
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import GOrientations from './components/GOrientations.vue'
import GColors from './components/GColors.vue'
import GResult from './components/GResult.vue'
import chroma from 'chroma-js'

export default {
  components: { GOrientations, GColors, GResult },
  setup() {
    const orientation = ref('to right top')

    const first = ref(null)
    const second = ref(null)
    const result = ref()
    const pageRef = ref()

    function changeOrientation(v) {
      orientation.value = v
    }

    function changeColors(v) {
      first.value = v.first
      second.value = v.second
    }

    // 5 цветов
    function changeBackground(c1, c2, o) {
      const colors = chroma.scale([c1, c2]).mode('lch').colors(6).toString()

      if (o !== 'circle') {
        result.value = `linear-gradient(${o}, ${colors})`
        pageRef.value.style.backgroundImage = result.value
      } else {
        result.value = `radial-gradient(${o}, ${colors})`
        pageRef.value.style.backgroundImage = result.value
      }
    }
    onMounted(() => {
      changeBackground('#008F7A', '#0089BA', 'to right top')
    })

    return {
      pageRef,
      result,
      changeBackground,
      changeOrientation,
      changeColors,
      first,
      second,
      orientation
    }
  }
}
</script>

<style lang="scss">
@import '@/style/base.scss';

.g-maker {
  text-align: center;
  min-height: 100%;
  padding: 60px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 30px;
  }

  section {
    text-align: center;
    margin-top: 16px;
  }

  &__generate {
    border: none;
    background-color: $main;
    padding: 8px;
    font-size: inherit;
    line-height: inherit;
    color: #fff;
    border-radius: 8px;
    box-shadow: $shadow;
    cursor: pointer;
    transition: all 0.2s;
    margin-top: 16px;

    &:hover {
      background-color: rgba($main, 0.7);
    }

    &:active {
      transform: scale(0.9);
    }

    &:disabled {
      cursor: not-allowed;
      background-color: rgba($light, 1);
    }
  }

  @media (max-width: 480px) {
    padding: 30px 8px;

    h2 {
      margin-top: 30px;
    }
  }
}
</style>
