import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useQuery, useBinaryState } from '@/shared/utils/hooks';

import { CharacterCard, ICharacterCard, CharacterDetail, ICharacterDetail } from "@/entities/character"
import { fetchCharacterAll } from "@/entities/character"

import { ModalUI } from "@/shared/ui";

import "./character-list-body.scss"

export const CharacterListBody = () => {
    const dispatch = useDispatch()
    let query = useQuery()

    const [detailCharacter, setDetailCharacter] = useState({} as ICharacterDetail)
    const [modalCharacterDetail, modalCharacterDetailShow, modalCharacterDetailClose, modalCharacterDetailToggle] = useBinaryState()

    const characterList = useSelector((state: any) => state.character.characters)
    const statusCharacterList = useSelector((state: any) => state.character.status)

    let page = query.get("page")
    let gender = query.get("gender")
    let name = query.get("name")

    useEffect(() => {
        const promise = dispatch(fetchCharacterAll({ page, gender, name }))
        return () => {
            promise.abort()
        }
    }, [])

    const handleCardClick = (character: ICharacterCard) => {
        setDetailCharacter(character)
        modalCharacterDetailShow()
    }

    const renderCharacterCard = (character: ICharacterCard) => {
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
                {statusCharacterList === "pending" && <div>Loading...</div>}
                {statusCharacterList === "failed" && <div>There is nothing here</div>}
                {statusCharacterList === "succeeded" && characterList.length > 0 && characterList.map(renderCharacterCard)}
            </div>
        </section>
    )
}