import { CharacterGenderFilter, CharacterSearch, CharacterResetFilters } from "@/features"

import "./character-controls-body.scss"


export const CharacterControlsBody = () => {
    return (
        <section className="character-controls-body">
            <CharacterSearch />
            <CharacterGenderFilter />
            <CharacterResetFilters />
        </section>
    )
}