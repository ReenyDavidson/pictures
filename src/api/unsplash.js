import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: " Client-ID NqZiIVc28Hd3B5p7aBI3JJSVKL1_k-Br2tUNVme0Bmw",
  },
});
