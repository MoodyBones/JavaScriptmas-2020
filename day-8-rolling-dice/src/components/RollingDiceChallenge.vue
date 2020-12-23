<template>
  <div class="container">
    <DiceFace1
      @click="rollDice"
      :isShowing1="isShowing1"
      @toggleDice="toggleDice"
    />
    <DiceFace2
      @click="rollDice"
      :isShowing2="isShowing2"
      @toggleDice="toggleDice"
    />
    <DiceFace3
      @click="rollDice"
      :isShowing3="isShowing3"
      @toggleDice="toggleDice"
    />
    <DiceFace4
      @click="rollDice"
      :isShowing4="isShowing4"
      @toggleDice="toggleDice"
    />
    <DiceFace5
      @click="rollDice"
      :isShowing5="isShowing5"
      @toggleDice="toggleDice"
    />
    <DiceFace6
      @click="rollDice"
      :isShowing6="isShowing6"
      @toggleDice="toggleDice"
    />
  </div>
</template>

<script>
import DiceFace1 from './DiceFace1.vue'
import DiceFace2 from './DiceFace2.vue'
import DiceFace3 from './DiceFace3.vue'
import DiceFace4 from './DiceFace4.vue'
import DiceFace5 from './DiceFace5.vue'
import DiceFace6 from './DiceFace6.vue'

export default {
  name: 'Challenge',
  components: {
    DiceFace1,
    DiceFace2,
    DiceFace3,
    DiceFace4,
    DiceFace5,
    DiceFace6,
  },
  data() {
    return {
      min: 1,
      max: 6,
      currentDice: 1,
      isShowing1: true,
      isShowing2: false,
      isShowing3: false,
      isShowing4: false,
      isShowing5: false,
      isShowing6: false,
    }
  },
  methods: {
    rollDice() {
      if (this.currentDice === 1) {
        this.isShowing1 = !this.isShowing1
      } else if (this.currentDice === 2) {
        this.isShowing2 = !this.isShowing2
      } else if (this.currentDice === 3) {
        this.isShowing3 = !this.isShowing3
      } else if (this.currentDice === 4) {
        this.isShowing4 = !this.isShowing4
      } else if (this.currentDice === 5) {
        this.isShowing5 = !this.isShowing5
      } else if (this.currentDice === 6) {
        this.isShowing6 = !this.isShowing6
      }
      this.generateNumber()
      if (this.currentDice === 1) {
        this.isShowing1 = !this.isShowing1
      } else if (this.currentDice === 2) {
        this.isShowing2 = !this.isShowing2
      } else if (this.currentDice === 3) {
        this.isShowing3 = !this.isShowing3
      } else if (this.currentDice === 4) {
        this.isShowing4 = !this.isShowing4
      } else if (this.currentDice === 5) {
        this.isShowing5 = !this.isShowing5
      } else if (this.currentDice === 6) {
        this.isShowing6 = !this.isShowing6
      }
    },
    generateNumber() {
      this.currentDice = Math.floor(
        Math.random() * (this.max - this.min + 1) + this.min
      )
      console.log(this.currentDice)
    },
    toggleDice(isShowing) {
      return isShowing
    },
  },
}
</script>
<style lang="scss" scoped>
.container {
  position: relative;
}
</style>
<!-- 
/*
DESCRIPTION:
In this challenge a casino has asked you to make an online dice that works just like 
it would in real life. Using the pre-made dice face that represents ‘one’, make the 
faces for ‘two’, ‘three’, ‘four’, ‘five’ and ‘six’. Now when the users clicks the 
dice on the screen the dice is expected to show one of the faces randomly.

event listeners, Math.random()

*/

// Write your code here 👇


/*

DETAILED INSTRUCTIONS
1. pick out the neccesary elements from the HTML
2. Create other 5 dice faces in CSS
3. use eventlisteners on the appropriate div
4. Display dice faces randomly on click

STRETCH GOALS:
- Can you show the number you rolled as a integer along-side the dice face?
- Can you improve the overall design?
*/


-->
