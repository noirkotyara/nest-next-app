import axios from "axios";

export const httpClient = axios.create({
  baseURL: process.env.SELL_SERVER_HOST ?? "http://localhost:8081",
  withCredentials: true,
});
