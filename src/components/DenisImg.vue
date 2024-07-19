<script setup>
import {useStore} from "../store/store.js";
import {computed, onMounted, watch} from "vue";
import {denisData} from "../helpers/denisData.js";

const store = useStore()

watch(() => store.counter, () => {
  store.setData()
})
</script>

<template>
  <img :style="`border-color: ${store.data.color}`" id="circle" :src="store.data.img" alt="frog"/>
</template>

<style scoped>

</style>