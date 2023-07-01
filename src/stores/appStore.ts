import { defineStore } from 'pinia'
import { ref, computed} from 'vue'

export const useAppStore = defineStore('userDetails', () => {
    const user = {
        firstName: '',
        lastName: '',
        userRole: ''

    }
  
  
    return { user }
  })