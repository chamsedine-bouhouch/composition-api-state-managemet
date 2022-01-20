<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="counter">
      {{count }}
    </div>
    <div class="buttons">
      <button @click="increase">+</button>
      <button @click="decrease">-</button>
    </div>
   </div>
</template>

<script>
import { computed } from '@vue/reactivity'
// @ is an alias to /src
//  import {ref} from 'vue'
import { useStore } from 'vuex'
import { GET_COUNTER, INCREASE_COUNTER, DECREASE_COUNTER } from '@/store/mutation-types'
import {mapGetters, mapMutations} from 'vuex'

 
export default {
  name: 'Home',
  props:{

  },

 
  setup () {
    
    const store = useStore()
  

    return {
      count: computed(() => store.getters[GET_COUNTER]),

       // access a mutation
      // increment: () => store.commit(INCREASE_COUNTER),
     //  decrease: () => store.commit(DECREASE_COUNTER),

      //  Refactor Vuex helpers
      ...mapMutations({
        increase: INCREASE_COUNTER
      }),
      ...mapMutations({
        decrease: DECREASE_COUNTER
      }),
    

      // access an action
      // asyncIncrement: () => store.dispatch('asyncIncrement')
    }
  }
 
  
 
}
</script>
<style  >
.counter{
  margin-bottom: 80px;
    font-size: 40px;
}
.buttons button{
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}
</style>
