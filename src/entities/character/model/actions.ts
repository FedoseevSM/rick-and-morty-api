import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCharacterAll } from "@/shared/api"

export const fetchCharacterAll = createAsyncThunk("character/fetchCharacterAll",
    async (arg: { page?: number, gender?: string, name?: string } | void) => {
        const page = arg?.page ? arg.page : 1
        const gender = arg?.gender ? arg.gender : ""
        const name = arg?.name ? arg.name : ""

        const { data } = await getCharacterAll({ page, gender, name })
        return data
    })