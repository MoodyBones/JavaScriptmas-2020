<template>
  <div @click="toggleDice">
    <div v-show="isShowing6" class="dice face6">
      <div class="dot-container">
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
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
  name: 'DiceFace6',
  props: {
    isShowing6: Boolean,
  },
  methods: {
    toggleDice() {
      this.$emit('toggleDice', this.isShowing6)
    },
  },
}
</script>

<style lang="scss" scoped>
.face6 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .dot-container {
    display: flex;
    justify-content: space-between;
  }
}
</style>
