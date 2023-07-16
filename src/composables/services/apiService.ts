const BASE_URL ="http://102.67.32.92:8089/api"
import axios from "axios"
import { getItemWithExpiry } from "../auth/useAuth";


export const createProvince = async (provinceCode: string, provinceName: string, provinceAddress: string) => {
  const token = getItemWithExpiry('token');
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  try {
    const response = await axios.post(`${BASE_URL}/Province/CreateProvince`, {
      provinceCode,
      provinceName,
      provinceAddress,
    }, config);
    return response.data;
  } catch (error) {
    return error
  }
};


export const getProvinces =  async() => {
  try {
      const res = await axios.get(`${BASE_URL}/api/Province/GetAllProvince`)
      return res.data
  } catch (error) {
        return error
  }
}


export const createArea = async (provinceCode: string, areaCode: string ,areaName: string, areaAddress: string) => {
  const token = getItemWithExpiry('token');
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  try {
    const response = await axios.post(`${BASE_URL}/Area/CreateArea`, {
      provinceCode,
      areaCode,
      areaName,
      areaAddress,
    }, config);
    return response.data; 
  } catch (error) {
    return error
  }
};
