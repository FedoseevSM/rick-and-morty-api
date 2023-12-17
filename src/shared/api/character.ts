import type { AxiosPromise } from "axios";

import { API } from "@/shared/api"
import { API_REQ } from "@/shared/config"

export const getCharacterAll = (params?: any): AxiosPromise => {
    return API
        .get(API_REQ.CHARACTER, { params })
        .catch(function (error) {
            if (error.response) {
                throw error.response.data.error
            }
        })
}
