import axios from 'axios'
import { useAppStore } from '../../stores/appStore'
import { useStorage } from '@vueuse/core'
const store = useAppStore()


export const handleLogin = async (userName:string, password:string) => {
    axios.post(`http://102.67.32.92:8089/api/authorization/login`, {
        userName,
        password
      })
      .then(function (response) {
        store.user.firstName = response.data.firstName
        store.user.userRole = response.data.userRole
        store.user.lastName = response.data.fullName

        console.log(store)
      })
      .catch(function (error) {
        console.log(error);
      })
}