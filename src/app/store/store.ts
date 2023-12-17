import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { characterReducer } from "@/entities/character"
import { searchCharacterReducer } from "@/features/character-search"

const rootReducer = combineReducers({
    character: characterReducer,
    searchCharacter: searchCharacterReducer
});

export const store = configureStore({
    reducer: rootReducer
})