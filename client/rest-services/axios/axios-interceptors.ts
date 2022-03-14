import { AxiosRequestConfig } from "axios";
import { httpClient } from "./axios-instance";

export const setUpInterceptors = () => {
  httpClient.interceptors.request.use((config: AxiosRequestConfig) => ({
    ...config,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  }));
};
