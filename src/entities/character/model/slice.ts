import { createSlice } from '@reduxjs/toolkit';
import { fetchCharacterAll } from "@/entities/character"

const initialState = {
    characters: [],
    info: {},
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
};

export const characterSlice = createSlice({
    name: "character",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCharacterAll.pending, (state, action) => {
            state.status = "pending";
        });
        builder.addCase(fetchCharacterAll.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.characters = action.payload.results;
            state.info = action.payload.info;
        });
        builder.addCase(fetchCharacterAll.rejected, (state, action) => {
            state.status = "failed";
        });
    }
})

export const characterReducer = characterSlice.reducer;