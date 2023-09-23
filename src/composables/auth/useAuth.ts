import axios from 'axios'

function setItemWithExpiry(key:string, value:string, expiryTimeInMinutes:number) {
  const now = new Date();
  const expiryTimestamp = now.getTime() + (expiryTimeInMinutes * 60 * 1000);
  const item = {
    value: value,
    expiry: expiryTimestamp
  };
  return localStorage.setItem(key, JSON.stringify(item));
}

export const handleLogin = async (userName:string, password:string) => {
  try {
    const response = await axios.post(
      'https://102.67.32.92:8089/api/authorization/login',
      {
        userName,
        password
      }
    );

    const user = {
      fullName: response.data.fullName,
      id: response.data.userId,
      firstName: response.data.firstName
    };

    setItemWithExpiry('token', response.data.token, 5760);
    setItemWithExpiry('userName', response.data.fullName, 5760);

    return user;
  } catch (error) {
    // Handle error if needed
    return error;
  }
};

export const getItemWithExpiry = (key:string) => {
  const itemString = localStorage.getItem(key);
  if (!itemString) {
    return null;
  }
  const item = JSON.parse(itemString);
  const now = new Date().getTime();
  if (now > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
}