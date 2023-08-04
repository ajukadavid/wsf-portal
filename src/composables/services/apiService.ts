const BASE_URL ="http://102.67.32.92:8089/api"
import axios from "axios"
import { getItemWithExpiry } from "../auth/useAuth";

const token = getItemWithExpiry('token');
const config = {
  headers: { Authorization: `Bearer ${token}` }
};

export const createProvince = async (provinceCode: string, provinceName: string, provinceAddress: string) => {

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
      const res = await axios.get(`${BASE_URL}/Province/GetAllProvince`, config)
      return res.data
  } catch (error) {
        return error
  }
}

export const getAllProvinces = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/System/GellAllProvince`, config)
    return res.data
} catch (error) {
      return error
}
}

//AREAS


export const createArea = async (provinceCode: string, areaCode: string ,areaName: string, areaAddress: string) => {
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



export const getAreas =  async() => {
  try {
      const res = await axios.get(`${BASE_URL}/Area/GetAllArea`, config)
      return res.data
  } catch (error) {
        return error
  }
}

export const getAllAreas =  async(provinceCode:string) => {
  try {
      const res = await axios.get(`${BASE_URL}/System/GetAllAreas/${provinceCode}`, config)
      return res.data
  } catch (error) {
        return error
  }
}



//ZONES

export const createZone = async (provinceCode: string, areaCode: string ,zoneCode: string, zoneName: string, zoneAddress:string) => {
  try {
    const response = await axios.post(`${BASE_URL}/Zone/CreateZone`, {
      provinceCode,
      areaCode,
      zoneCode,
      zoneName,
      zoneAddress,
    }, config);
    return response.data; 
  } catch (error) {
    return error
  }
};
