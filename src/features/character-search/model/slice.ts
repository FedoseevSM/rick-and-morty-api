import { createSlice } from '@reduxjs/toolkit';
import { fetchCharacterSearch } from "@/features/character-search"

export enum LoadingState {
    Idle = "idle",
    Pending = "pending",
    Succeeded = "succeeded",
    Failed = "failed"
}

const initialState = {
    characters: [],
    loading: LoadingState.Idle as LoadingState
};

export const searchCharacterSlice = createSlice({
    name: "searchCharacter",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCharacterSearch.pending, (state, action) => {
            state.loading = LoadingState.Pending;
        });
        builder.addCase(fetchCharacterSearch.fulfilled, (state, action) => {
            state.loading = LoadingState.Succeeded;
            state.characters = action.payload.results;
        });
        builder.addCase(fetchCharacterSearch.rejected, (state, action) => {
            state.loading = LoadingState.Failed;
        });
    }
})

export const searchCharacterReducer = searchCharacterSlice.reducer;