import { createSlice } from '@reduxjs/toolkit';
import { fetchCharacterAll } from "@/entities/character"

export enum LoadingState {
    Idle = "idle",
    Pending = "pending",
    Succeeded = "succeeded",
    Failed = "failed"
}

const initialState = {
    characters: [],
    info: {},
    loading: LoadingState.Idle as LoadingState
};

export const characterSlice = createSlice({
    name: "character",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCharacterAll.pending, (state, action) => {
            state.loading = LoadingState.Pending;
        });
        builder.addCase(fetchCharacterAll.fulfilled, (state, action) => {
            state.loading = LoadingState.Succeeded;
            state.characters = action.payload.results;
            state.info = action.payload.info;
        });
        builder.addCase(fetchCharacterAll.rejected, (state, action) => {
            state.loading = LoadingState.Failed;
        });
    }
})

export const characterReducer = characterSlice.reducer;