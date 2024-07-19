import {defineStore} from "pinia";
import {computed, onMounted, ref, watch} from "vue";
import {denisRegress} from "../helpers/helper.js";
import {denisData} from "../helpers/denisData.js";

export const useStore = defineStore('store', () => {

    if (!localStorage.getItem('counter')) {
        localStorage.setItem('counter', "0");
    }
    const counter = ref(JSON.parse(localStorage.getItem('counter')));
    const data = ref({})

    const start = () => {
        if (counter.value < 50) {
            data.value = denisData[0]
        } else if (counter.value >= 50 && counter.value < 100) {
            data.value = denisData[1]
        } else if (counter.value >= 100 && counter.value < 300) {
            data.value = denisData[2]
        } else if (counter.value >= 300 && counter.value < 500) {
            data.value = denisData[3]
        } else if (counter.value >= 500 && counter.value < 700) {
            data.value = denisData[4]
        } else if (counter.value >= 700 && counter.value) {
            data.value = denisData[5]
        }
    }

    onMounted(() => {
        start()
    })

    const setData = () => {
        start()
    }

    const addCounter = () => {
        counter.value++
        localStorage.setItem('counter', JSON.stringify(counter.value));
    }

    const removeCounter = () => {
        counter.value--
        denisRegress()
        localStorage.setItem('counter', JSON.stringify(counter.value));
    }

    return {
        counter,
        data,
        addCounter,
        removeCounter,
        setData
    }
})