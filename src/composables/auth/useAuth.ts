import axios from 'axios'

function setWithExpiry(key:string, value:string, expiryTime:number) {
  const now = new Date()
  const item = {
    value: value,
    expiry: now.getTime() + expiryTime,
  }
  localStorage.setItem(key, JSON.stringify(item))
}

export const handleLogin = async (userName:string, password:string, user:any) => {
   await axios.post(`http://102.67.32.92:8089/api/authorization/login`, {
        userName,
        password
      })
      .then(function (response) {
        setWithExpiry("token", response.data.token, 345600000)
        user.fullName = response.data.fullName
        user.id = response.data.userId
        user.firstName = response.data.firstName
      })
      .catch(function (error) {
        console.log(error);
      })

      return user
}