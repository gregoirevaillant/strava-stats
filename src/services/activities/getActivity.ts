import axiosInstance from "../axiosInstance.ts";

const getActivity = async (activityId: string) => {
  const response = await axiosInstance.get(`/api/v3/activities/${activityId}`);
  
  return response.data;
};

export default getActivity;
