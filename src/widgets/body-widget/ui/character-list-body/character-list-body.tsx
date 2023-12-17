import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useQuery, useBinaryState } from '@/shared/utils/hooks';

import {ThunkDispatch} from "@reduxjs/toolkit";

import { CharacterCard, ICharacterCard, CharacterDetail, ICharacterDetail } from "@/entities/character"
import { fetchCharacterAll, LoadingState } from "@/entities/character"

import { ModalUI } from "@/shared/ui";

import "./character-list-body.scss"

export const CharacterListBody = () => {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    let query = useQuery()

    const [detailCharacter, setDetailCharacter] = useState({} as ICharacterDetail)
    const [modalCharacterDetail, modalCharacterDetailShow, modalCharacterDetailClose, modalCharacterDetailToggle] = useBinaryState()

    const characterList = useSelector((state: any) => state.character.characters)
    const statusCharacterList = useSelector((state: any) => state.character.loading)

    let page: number = Number.parseFloat(query.get("page")!)
    let gender: string = query.get("gender")!
    let name: string = query.get("name")!

    useEffect(() => {
        const promise = dispatch(fetchCharacterAll({ page, gender, name }))
        return () => {
            promise.abort()
        }
    }, [])

    const handleCardClick = (character: ICharacterDetail) => {
        setDetailCharacter(character)
        modalCharacterDetailShow()
    }

    const renderCharacterCard = (character: ICharacterDetail) => {
        return (
            <CharacterCard key={character.id} name={character.name} image={character.image} handleClick={() => handleCardClick(character)} />
        )
    }

    return (
        <section className="character-list-body">
            <div className="character-list-body__inner">
                {modalCharacterDetail && (
                    <ModalUI handleClose={modalCharacterDetailClose}>
                        <CharacterDetail
                            name={detailCharacter.name}
                            image={detailCharacter.image}
                            status={detailCharacter.status}
                            species={detailCharacter.species}
                            type={detailCharacter.type}
                            gender={detailCharacter.gender}
                        />
                    </ModalUI>
                )}
                {statusCharacterList === LoadingState.Pending && <div>Loading...</div>}
                {statusCharacterList === LoadingState.Failed && <div>There is nothing here</div>}
                {statusCharacterList === LoadingState.Succeeded && characterList.length > 0 && characterList.map(renderCharacterCard)}
            </div>
        </section>
    )
}