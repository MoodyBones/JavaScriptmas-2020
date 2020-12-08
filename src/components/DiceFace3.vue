<template>
  <div class="dice face3">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
</template>

<script>
export default {
  name: 'DiceFace3',
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
