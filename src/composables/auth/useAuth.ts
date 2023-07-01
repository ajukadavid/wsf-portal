import axios from 'axios'



export const handleLogin = async (userName:string, password:string, user:any) => {
   await axios.post(`http://102.67.32.92:8089/api/authorization/login`, {
        userName,
        password
      })
      .then(function (response) {
        localStorage.setItem('token', response.data.token)
        user.fullName = response.data.fullName
        user.id = response.data.userId
        user.firstName = response.data.firstName
      })
      .catch(function (error) {
        console.log(error);
      })

      return user
}