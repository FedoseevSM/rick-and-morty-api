import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useQuery } from "@/shared/utils/hooks"

import { fetchCharacterAll } from "@/entities/character"

import { PaginationUI } from "@/shared/ui"

import "./character-pagination.scss"


export const CharacterPagination = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let query = useQuery()

    let info = useSelector((state: any) => state.character.info)

    let pages = info.pages
    let prev = info.prev ? new URL(info.prev).searchParams.get("page") : 0
    let next = info.next ? new URL(info.next).searchParams.get("page") : 0
    let currentPage = (next) ? next - 1 : pages

    let name = query.get("name")
    let gender = query.get("gender")

    const handleChangePage = (id) => {
        query.set("page", id)
        dispatch(fetchCharacterAll({ page: id, name, gender }))
        navigate(`?${query.toString()}`)
    }

    return (
        <div className="character-pagination">
            <PaginationUI
                handleChangeNext={() => handleChangePage(next ? next : pages)}
                handleChangePrev={() => handleChangePage(prev ? prev : 1)}
                currentPage={currentPage}
                pages={pages}
            />
        </div>
    )
}