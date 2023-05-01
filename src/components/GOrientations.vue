<template>
  <div class="g-maker__gradient-orientations">
    <div v-for="(v, i) in gOrientations" :key="i" class="g-maker__gradient-orientation">
      <label :for="`orientation-${i + 1}`" :class="{ active: orientation === v.value }">
        <svg width="24" height="24" :style="{ transform: v.deg && `rotate(${v.deg}deg)` }">
          <use v-if="v.value !== 'circle'" xlink:href="#arrow" />
          <use v-else xlink:href="#rotate" />
        </svg>
      </label>
      <input
        name="gOrientation"
        type="radio"
        :id="`orientation-${i + 1}`"
        :value="v.value"
        @input="$emit('change-orientation', v.value)"
      />
    </div>
  </div>
</template>

<script>

const gOrientations = [
  { value: 'to right top', deg: 130 },
  { value: 'to right', deg: 180 },
  { value: 'to right bottom', deg: 230 },
  { value: 'to bottom', deg: 270 },
  { value: 'to left bottom', deg: 310 },
  { value: 'to left', deg: 360 },
  { value: 'to left top', deg: 400 },
  { value: 'to top', deg: 90 },
  { value: 'circle' }
]

export default {
  emits: ['change-orientation'],
  props: {
    orientation: {
      type: String,
      required: true
    }
  },
  setup() {

    return {
      gOrientations,
    }
  }
}
</script>

<style lang="scss">
.g-maker {
  &__gradient-orientations {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
  }

  &__gradient-orientation {
    label {
      cursor: pointer;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      border-radius: 50%;
      transition: all 0.2s;
      outline: 1px solid transparent;

      &.active {
        outline: 1px solid #fff;
      }
    }

    input {
      position: absolute;
      opacity: 0;
    }

    svg {
      stroke: #fff;
      stroke-width: 3px;
    }
  }
  @media (max-width: 480px) {
    &__gradient-orientations {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>
