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


export const getAllCells = async (zoneCode: string) => {
  try {
    const res = await axios.get(`${BASE_URL}/System/GetAllCell/${zoneCode}`, config)
    return res.data
} catch (error) {
      return error
}
}

//REPORTS
async function fetchDataWithParams(apiUrl:any, queryParams:any) {
  const url = new URL(apiUrl);
  Object.keys(queryParams).forEach(key => {
    if (queryParams[key]) {
      url.searchParams.append(key, queryParams[key]);
    }
  });

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
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export async function getReports(reportOptions:any) {
  const apiUrl = `${BASE_URL}/Reports/GetReports`;

  return fetchDataWithParams(apiUrl, reportOptions);
}

// Example usage

export const createReport = async (
  provinceCode: string, 
  areaCode: string, 
  zoneCode: string,
  cellCode:string,
  male:string, 
  female: string,
  children:string,
  newComers:string,
  testimonies:string,
  total: string,
  ) => {
  try {
    const response = await axios.post(`${BASE_URL}/CellReport/cellReport`, {
      provinceCode,
      areaCode,
      zoneCode,
      cellCode,
      male, 
      female,
      children,
      newComers,
      testimonies,
      total,
    }, config);
    return response.data; 
  } catch (error) {
    return error
  }
};


//USERS


export const createUser = async (
  provinceCode: string, 
  areaCode: string, 
  zoneCode: string,
  surname:string,
  firstName:string, 
  email: string,
  phone:string,
  password:string,
  userRole:string,
  ) => {
  try {
    const response = await axios.post(`${BASE_URL}/Users/CreateUsers`, {
      provinceCode,
      areaCode,
      zoneCode,
      surname,
      firstName, 
      email,
      phone,
      password,
      userRole,
    }, config);
    return response.data; 
  } catch (error) {
    return error
  }
};


export const getUsers =  async() => {
  try {
      const res = await axios.get(`${BASE_URL}/Users/GetAllUsers`, config)
      return res.data
  } catch (error) {
        return error
  }
}

//ADMIN DASHBOARD

export const getDashboardData =  async() => {
  try {
      const res = await axios.get(`${BASE_URL}/DashBoard/DashBoardByAdmin`, config)
      return res.data
  } catch (error) {
        return error
  }
}

