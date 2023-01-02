import axios from "axios";
import { API_KEY } from "@env";

export const getImages = async (seachTerm = "home office") =>
  await axios.get(`https://api.pexels.com/v1/search?query=${seachTerm}`, {
    headers: {
      Authorization: API_KEY,
    },
  });
