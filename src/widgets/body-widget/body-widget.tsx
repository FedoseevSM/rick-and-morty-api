import { CharacterListBody, CharacterControlsBody } from "@/widgets/body-widget"
import { CharacterPagination } from "@/features"

import "./body-widget.scss"


export const BodyWidget = () => {
    return (
        <div className="body-widget">
            <CharacterControlsBody />
            <CharacterListBody />
            <CharacterPagination />
        </div>
    )
}