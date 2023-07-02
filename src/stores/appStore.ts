import { defineStore } from 'pinia'

export const useAppStore = defineStore('userDetails', () => {
    const user = {
        firstName: '',
        lastName: '',
        userRole: '',
        id: ''

    }
    const baseUrl = 'http://102.67.32.92:8089'
  
  
    return { user, baseUrl }
  })