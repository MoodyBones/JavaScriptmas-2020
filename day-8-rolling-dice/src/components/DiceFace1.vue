<template>
  <div @click="toggleDice">
    <div v-show="isShowing1" class="dice face1">
      <div class="dot"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DiceFace1',
  props: {
    isShowing1: Boolean,
  },
  methods: {
    toggleDice() {
      this.$emit('toggleDice', this.isShowing1)
    },
  },
}
</script>

<style lang="scss" scoped>
.face1 {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<!--
TODO
on click make it hide show
 -->
