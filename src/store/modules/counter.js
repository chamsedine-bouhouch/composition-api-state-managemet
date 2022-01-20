
import { reactive } from 'vue'
import { GET_COUNTER, INCREASE_COUNTER, DECREASE_COUNTER } from '@/store/mutation-types'
export default {
    namespaces: true,
    state: reactive({
        counter: 0
    }),
    getters: {
        [GET_COUNTER]: state => state.counter
    },
    mutations: {
        [INCREASE_COUNTER]: state => state.counter++,
        [DECREASE_COUNTER]: state => state.counter--
    },
    actions: {

    },
}