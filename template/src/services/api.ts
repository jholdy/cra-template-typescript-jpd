import { create } from "apisauce";

const api = create({
  baseURL: "https://localhost",
  timeout: 50
});

export default api;
