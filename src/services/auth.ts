import { IAccessToken } from "../types/IAccessToken.ts";
import axiosInstance from "./axiosInstance.ts";

const auth = async (data: IAccessToken) => {
  const response = await axiosInstance.get("/api/v3/athlete", {
    headers: {
      Authorization: `Bearer ${data.accessToken}`,
    },
  });

  return response.data;
};

export default auth;
