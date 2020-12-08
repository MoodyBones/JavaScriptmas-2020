<template>
  <div @click="toggleDice">
    <div v-show="isShowing3" class="dice face3">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DiceFace3',
  props: {
    isShowing3: Boolean,
  },
  methods: {
    toggleDice() {
      this.$emit('toggleDice', this.isShowing3)
    },
  },
}
</script>

<style lang="scss" scoped>
.face3 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  .dot:nth-child(even) {
    align-self: center;
  }
  .dot:last-child {
    align-self: flex-end;
  }
}
</style>
