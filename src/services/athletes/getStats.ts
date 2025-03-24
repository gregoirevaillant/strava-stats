import axiosInstance from "../axiosInstance.ts";

const getStats = async (athleteId: number) => {
  const response = await axiosInstance.get(`/api/v3/athletes/${athleteId}/stats`);
  
  return response.data;
};

export default getStats;
