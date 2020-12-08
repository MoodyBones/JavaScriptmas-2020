<template>
  <div @click="toggleDice">
    <div v-show="isShowing5" class="dice face5">
      <div class="dot-container">
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <div class="dot dot-center"></div>
      <div class="dot-container">
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DiceFace5',
  props: {
    isShowing5: Boolean,
  },
  methods: {
    toggleDice() {
      this.$emit('toggleDice', this.isShowing5)
    },
  },
}
</script>

<style lang="scss" scoped>
.face5 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .dot-container {
    display: flex;
    justify-content: space-between;
  }
  .dot-center {
    align-self: center;
  }
}
</style>
