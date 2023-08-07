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


export const getAllZones = async (areaCode: string) => {
  try {
    const res = await axios.get(`${BASE_URL}/System/GetAllZone/${areaCode}`, config)
    return res.data
} catch (error) {
      return error
}
}

//CELLS

export const createCell = async (provinceCode: string, areaCode: string ,zoneCode: string, cellCode:string, cellName: string, cellAddress:string) => {
  try {
    const response = await axios.post(`${BASE_URL}/Cell/CreateCell`, {
      provinceCode,
      areaCode,
      zoneCode,
      cellCode,
      cellName,
      cellAddress,
    }, config);
    return response.data; 
  } catch (error) {
    return error
  }
};


//Reports

// export const getReports = async (ProvinceCode?: string, AreaCode?: string, ZoneCode?: string, CellCode?: string, from?: string, to?: string, PageNumber?: string, PageSize?: string ) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/Reports/GetReports`, {params: {ProvinceCode, AreaCode, ZoneCode, CellCode, from, to, PageNumber, PageSize}},);
//     return response.data
//   } catch(err) {
//     return err
//   }
// }
// const BASE_URL = 'https://api.example.com'; // Replace with your base API URL

export async function getReports(
  ProvinceCode?: string,
  AreaCode?: string,
  ZoneCode?: string,
  CellCode?: string,
  from?: string,
  to?: string,
  PageNumber?: string,
  PageSize?: string,
): Promise<any> {
  const apiUrl = `${BASE_URL}/Reports/GetReports`;
  const queryParams: any = {
    ProvinceCode,
    AreaCode,
    ZoneCode,
    CellCode,
    from,
    to,
    PageNumber,
    PageSize,
  };

  const url = new URL(apiUrl);
  Object.keys(queryParams).forEach(key => queryParams[key] && url.searchParams.append(key, queryParams[key]));

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        // Add other headers if required by your API
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  } catch (err) {
    console.error('Error:', err);
    return err;
  }
}

// Usage example:
// const authToken = 'YOUR_AUTHORIZATION_TOKEN'; // Replace with your actual authorization token

