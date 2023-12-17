import axios from "axios";

import { BASE_API } from "@/shared/config"

export const API = axios.create({
    baseURL: BASE_API,
});