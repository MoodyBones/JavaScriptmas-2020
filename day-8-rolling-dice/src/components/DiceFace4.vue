<template>
  <div @click="toggleDice">
    <div v-show="isShowing4" class="dice face4">
      <div class="dot-container">
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <div class="dot-container">
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DiceFace4',
  props: {
    isShowing4: Boolean,
  },
  methods: {
    toggleDice() {
      this.$emit('toggleDice', this.isShowing4)
    },
  },
}
</script>

<style lang="scss" scoped>
.face4 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .dot-container {
    display: flex;
    justify-content: space-between;
  }
}
</style>
