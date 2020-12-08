<template>
  <RollingDiceChallenge />
</template>

<script>
import RollingDiceChallenge from './components/RollingDiceChallenge.vue'

export default {
  name: 'App',
  components: {
    RollingDiceChallenge,
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
  display: flex;
  background-color: #aeb8fe;
}
.dice {
  width: 90px;
  height: 90px;
  border-radius: 10px;
  background-color: #efe5dc;
  margin: 100px;
  padding: 0.5rem;
}

.dot {
  width: 20px;
  height: 20px;
  border-radius: 15px;
  background-color: black;
}
</style>
