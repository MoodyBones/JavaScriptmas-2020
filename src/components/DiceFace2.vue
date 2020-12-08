<template>
  <div @click="toggleDice">
    <div v-show="isShowing2" class="dice face2">
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DiceFace2',
  props: {
    isShowing2: Boolean,
  },
  methods: {
    toggleDice() {
      this.$emit('toggleDice', this.isShowing2)
    },
  },
}
</script>

<style lang="scss" scoped>
.face2 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  .dot:last-child {
    align-self: flex-end;
  }
}
</style>
