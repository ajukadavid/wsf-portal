import { defineStore } from 'pinia'
import { ref, computed} from 'vue'

export const useCounterStore = defineStore('counter', () => {
    const user = {
        firstName: '',


    }
  
  
    return { user }
  })