import axiosInstance from "./axiosInstance.ts";

const getActivities = async () => {
  const response = await axiosInstance.get("/api/v3/athlete/activities");
  
  return response.data;
};

export default getActivities;
