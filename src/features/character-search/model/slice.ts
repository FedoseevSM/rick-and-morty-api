import { createSlice } from '@reduxjs/toolkit';
import { fetchCharacterSearch } from "@/features/character-search"

const initialState = {
    characters: [],
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
};

export const searchCharacterSlice = createSlice({
    name: "searchCharacter",
    initialState,
    reducers: {
        clearCharacterSearch: (state, action) => {
        state.characters = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCharacterSearch.pending, (state, action) => {
            state.status = "pending";
        });
        builder.addCase(fetchCharacterSearch.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.characters = action.payload.results;
        });
        builder.addCase(fetchCharacterSearch.rejected, (state, action) => {
            state.status = "failed";
        });
    }
})

export const { clearCharacterSearch } = searchCharacterSlice.actions;

export const searchCharacterReducer = searchCharacterSlice.reducer;