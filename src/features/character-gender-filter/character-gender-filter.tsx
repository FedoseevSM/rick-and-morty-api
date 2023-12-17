import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@/shared/utils/hooks';

import { fetchCharacterAll } from "@/entities/character"

import { SelectUI } from "@/shared/ui"


export const CharacterGenderFilter = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let query = useQuery()

    let name = query.get("name")
    let gender = query.get("gender")

    const handleChangeGender = (event) => {
        gender = event.target.value
        query.set("gender", gender)
        if (gender !== "none") {
            dispatch(fetchCharacterAll({ gender, name }))
        }
        if (gender === "none") {
            query.delete("gender", "none")
            dispatch(fetchCharacterAll({name}))
        }
        query.delete("gender", "")
        navigate(`?${query.toString()}`)
    }

    return (
        <div>
            <SelectUI name="character-gender" id="character-gender" value={query.get("gender") || 'none'} onChange={handleChangeGender}>
                <SelectUI.Item value="none">none</SelectUI.Item>
                <SelectUI.Item value="male">male</SelectUI.Item>
                <SelectUI.Item value="female">female</SelectUI.Item>
                <SelectUI.Item value="genderless">genderless</SelectUI.Item>
                <SelectUI.Item value="unknown">unknown</SelectUI.Item>
            </SelectUI>
        </div>
    )
}