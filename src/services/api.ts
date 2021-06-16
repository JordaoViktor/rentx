import axios from "axios";
import { BASE_URL } from "../../.env.json";

const api = axios.create({
  baseURL: BASE_URL,
});

export { api };
