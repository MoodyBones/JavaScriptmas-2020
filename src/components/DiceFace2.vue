<template>
  <div class="dice face2">
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
</template>

<script>
export default {
  name: 'DiceFace2',
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
