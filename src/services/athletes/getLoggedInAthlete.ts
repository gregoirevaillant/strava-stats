import axiosInstance from "../axiosInstance.ts";

const getLoggedInAthlete = async () => {
  const response = await axiosInstance.get(`/api/v3/athlete`);
  
  return response.data;
};

export default getLoggedInAthlete;
