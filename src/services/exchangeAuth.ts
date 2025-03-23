

import { IExchangeAuth } from "../types/IExchangeAuth.ts";
import axiosInstance from "./axiosInstance.ts";

const exchangeAuth = async (data: IExchangeAuth) => {
  const response = await axiosInstance.post("/oauth/token", {
    client_id: data.client_id,
    client_secret: data.client_secret,
    code: data.code,
    grant_type: "authorization_code",
  });

  localStorage.setItem("access_token", response.data.access_token)

  return response.data;
};

export default exchangeAuth;
