import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { useQuery, useDebounce, useBinaryState } from "@/shared/utils/hooks"

import { CharacterRow, ICharacterRow } from "@/entities/character"
import { fetchCharacterAll } from "@/entities/character"
import { fetchCharacterSearch, clearCharacterSearch } from "@/features/character-search"

import { InputUI, ButtonUI } from "@/shared/ui"

import "./character-search.scss"

export const CharacterSearch = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let query = useQuery()

    const [resultsCharacterSearch, resultsCharacterSearchShow, resultsCharacterSearchClose, resultsCharacterSearchToggle] = useBinaryState()

    const searchCharacters = useSelector((state: any) => state.searchCharacter.characters)
    const searchCharactersStatus = useSelector((state: any) => state.searchCharacter.status)

    let name = query.get("name")
    let gender = query.get("gender")

    const debouncedFetchCharacterSearch = useDebounce(() => dispatch(fetchCharacterSearch({ name })), 600)

    const handleChangeSearch = (event) => {
        resultsCharacterSearchShow()
        name = event.target.value
        query.set("name", name)
        query.delete("name", "")
        if (name) debouncedFetchCharacterSearch()
        if (!name) {
            resultsCharacterSearchClose()
            dispatch(clearCharacterSearch())
        }
        navigate(`?${query.toString()}`)
    }

    const handleClearSearch = (event) => {
        resultsCharacterSearchClose()
        dispatch(clearCharacterSearch())
        query.delete("name")
        dispatch(fetchCharacterAll({ gender }))
        navigate(`?${query.toString()}`)
    }

    const handleChooseSearch = (event) => {
        event.preventDefault()
        resultsCharacterSearchClose()
        dispatch(clearCharacterSearch())
        dispatch(fetchCharacterAll({ name, gender }))
    }

    const handleCharacterRow = (event, name) => {
        event.preventDefault()
        resultsCharacterSearchClose()
        query.set("name", name)
        dispatch(fetchCharacterAll({ name, gender }))
        dispatch(clearCharacterSearch())
        navigate(`?${query.toString()}`)
    }

    const renderCharacterRow = (character: ICharacterRow) => {
        return (
            <div key={character.id}>
                <CharacterRow name={character.name} image={character.image} handleClick={(event) => handleCharacterRow(event, character.name)} />
            </div>
        )
    }

    return (
        <form className="character-search">
            <InputUI type="text" onChange={handleChangeSearch} value={name ? name : ""} placeholder="Search a character..." />
            <div className="character-search__controls">
                <div className="character-search__actions">
                    {name && <ButtonUI type="reset" onClick={handleClearSearch} className="character-search__button--clear">X</ButtonUI>}
                </div>
                <ButtonUI type="submit" onClick={handleChooseSearch} className="character-search__button--ok">Ok</ButtonUI>
            </div>
            {resultsCharacterSearch && (
                <div className="character-search__results">
                    {searchCharactersStatus === "pending" && <div>Loading...</div>}
                    {searchCharactersStatus === "failed" && <div>There is nothing here</div>}
                    {searchCharactersStatus === "succeeded" && searchCharacters.length > 0 && searchCharacters.map(renderCharacterRow)}
                </div>
            )}
        </form>
    )
}