<template>
  <div class="about">
    <h1>This is an about page</h1>
    counter {{ count}}
  </div>
</template>
<script>
import { useStore } from 'vuex'
import { computed } from '@vue/reactivity'
import { GET_COUNTER } from '@/store/mutation-types'

export default {
  name:'About',

  setup() {
    const store = useStore()
    return{
      count: computed(() => store.getters[GET_COUNTER]),

    }
  },
}
</script>