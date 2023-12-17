import { SelectItemUI } from "./ui"

import "./select-ui.scss"


export const SelectUI = (props) => {
    return (
        <select {...props} className="select-ui">
            {props.children}
        </select>
    )
}

SelectUI.Item = SelectItemUI
