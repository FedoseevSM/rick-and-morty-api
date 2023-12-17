import "./character-card.scss"

export interface ICharacterCard {
    name: string,
    image: string,
    id?: number,
    handleClick: () => void
}

export const CharacterCard = ({ name, image, handleClick }: ICharacterCard) => {
    return (
        <button onClick={handleClick} className="character-card">
            <p className="character-card__name">{name}</p>
            <img className="character-card__image" src={image} width="200" height="200" />
        </button>
    )
}