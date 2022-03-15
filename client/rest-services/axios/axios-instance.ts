import axios from "axios";
console.log("hello", process.env.SELL_SERVER_HOST);
export const httpClient = axios.create({
  baseURL: process.env.SELL_SERVER_HOST,
  withCredentials: true,
});
