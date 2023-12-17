import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom"
import { useQuery } from '@/shared/utils/hooks';

import { fetchCharacterAll } from "@/entities/character"

import { ButtonUI } from "@/shared/ui"


export const CharacterResetFilters = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let query = useQuery()

    const handleResetFilters = () => {
        query.delete("gender")
        query.delete("page")
        query.delete("name")
        dispatch(fetchCharacterAll())
        navigate(`?${query.toString()}`)
    }

    return (
        <ButtonUI onClick={handleResetFilters}>
            Reset Filters
        </ButtonUI>
    )
}