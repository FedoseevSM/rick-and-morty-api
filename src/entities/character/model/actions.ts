import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCharacterAll } from "@/shared/api"

export const fetchCharacterAll = createAsyncThunk("character/fetchCharacterAll",
    async (arg: { page: number, gender: string, name: "string" }) => {
        const page = arg ? arg.page : 1
        const gender = arg ? arg.gender : ""
        const name = arg ? arg.name : ""

        const { data } = await getCharacterAll({ page, gender, name })
        return data
    })