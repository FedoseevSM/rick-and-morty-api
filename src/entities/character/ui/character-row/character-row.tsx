import "./character-row.scss"

export interface ICharacterRow {
    name: string,
    image: string,
    id?: number,
    handleClick: any
}

export const CharacterRow = ({name, image, handleClick}: ICharacterRow) => {
    return (
        <button onClick={handleClick} className="character-row">
            <p>{name}</p>
            <img src={image} width="50" height="50" />
        </button>
    )
}