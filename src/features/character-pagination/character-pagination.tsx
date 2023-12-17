import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useQuery } from "@/shared/utils/hooks"

import {ThunkDispatch} from "@reduxjs/toolkit";

import { fetchCharacterAll } from "@/entities/character"

import { PaginationUI } from "@/shared/ui"

import "./character-pagination.scss"


export const CharacterPagination = () => {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const navigate = useNavigate()
    let query = useQuery()

    let info = useSelector((state: any) => state.character.info)

    let pages: number = info.pages
    let prev: number = info.prev ? Number.parseFloat(new URL(info.prev).searchParams.get("page")!) : 0
    let next: number = info.next ? Number.parseFloat(new URL(info.next).searchParams.get("page")!) : 0
    let currentPage: number = (next) ? next - 1 : pages

    let name: string = query.get("name")!
    let gender: string = query.get("gender")!

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