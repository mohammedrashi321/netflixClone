import axios from "axios";
import { baseurl } from "./components/constants/constants";
const instance = axios.create({
    baseURL: baseurl,
  });

  export default instance