import { defineStore } from 'pinia'

export const useAppStore = defineStore('userDetails', () => {
    const user = {
        firstName: '',
        lastName: '',
        userRole: '',
        id: ''

    }
  
  
    return { user }
  })