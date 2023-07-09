const BASE_URL ="http://102.67.32.92:8089/api"
import axios from "axios"

export const createProvince = async (provinceCode: string, provinceName: string, provinceAddress: string) => {
  const token = localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  try {
    const response = await axios.post(`${BASE_URL}/Province/CreateProvince`, {
      provinceCode,
      provinceName,
      provinceAddress,
    }, config);
    return response.data; // Return the response data if the request was successful
  } catch (error) {
    return error
  }
};

