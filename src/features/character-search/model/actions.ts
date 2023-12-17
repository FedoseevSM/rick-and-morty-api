import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCharacterAll } from "@/shared/api"

export const fetchCharacterSearch = createAsyncThunk("character/fetchCharacterSearch",
    async (arg: { name: string }) => {
        const name = arg ? arg.name : ""

        const { data } = await getCharacterAll({ name })
        return data
    })