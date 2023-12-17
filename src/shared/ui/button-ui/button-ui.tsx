import cn from 'classnames';

import "./button-ui.scss"

export const ButtonUI = (props) => {
    return (
        <button {...props} className={cn("button-ui", props.className)}>
            {props.children}
        </button>
    )
}