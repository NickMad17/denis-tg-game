<script setup>
import {onMounted, ref} from "vue";
import {useStore} from "../store/store.js";
import {denisClick} from "../helpers/helper.js";
import DenisImg from "./DenisImg.vue";

const store = useStore()

const debounce = ref(null)

let interval
let delayInterval = 5000

onMounted(() => {
  if (store.counter > 10) {
    interval = setInterval(() => {
      if (store.counter > 10) {
        store.removeCounter()
      } else {
        clearInterval(interval)
      }
    }, delayInterval)
  }
})

const addCounter = (e) => {
  denisClick(e)
  clearInterval(interval)
  clearTimeout(debounce.value)
  store.addCounter()
  debounce.value = setTimeout(() => {
    interval = setInterval(() => {
      if (store.counter > 10) {
        store.removeCounter()
      } else {
        clearInterval(interval)
      }
    }, delayInterval)
  }, delayInterval)
}
</script>

<template>
  <div class="game">
    <div class="header">
      <img src=".././assets/coin.png" alt="coin"/>
      <h2 class="score" id="score">{{ store.counter }}</h2>
    </div>
    <div class="circle" @click="addCounter">
      <DenisImg/>
    </div>
    <h1 class="denis-name">{{ store.data.name }}</h1>
  </div>
</template>

<style scoped>

</style>