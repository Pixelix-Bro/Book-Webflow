import axios from "axios";
export const apiCleant = axios.create({
  baseURL: "https://book-webflow-i76f.vercel.app/",
  timeout: 4000,
});

