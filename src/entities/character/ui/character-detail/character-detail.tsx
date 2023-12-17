import "./character-detail.scss"

export interface ICharacterDetail {
    name: string,
    image: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    id?: number
}

export const CharacterDetail = ({ name, image, status, species, type, gender }: ICharacterDetail) => {
    return (
        <div className="character-detail">
            <img className="character-detail__image" src={image} />
            <div className="character-detail__specifications">
                <h3 className="character-detail__name">{name}</h3>
                <p><span className="character-detail__property">status:</span> {status}</p>
                <p><span className="character-detail__property">species:</span>  {species}</p>
                <p><span className="character-detail__property">type:</span> {type}</p>
                <p><span className="character-detail__property">gender:</span> {gender}</p>
            </div>
        </div>
    )
}