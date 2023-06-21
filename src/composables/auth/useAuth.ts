import axios from 'axios'


export const handleLogin = async (userName:string, password:string) => {
    axios.post(`http://102.67.32.92:8089/api/authorization/login`, {
        userName,
        password
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}