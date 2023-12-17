import { createPortal } from "react-dom"

import "./modal-ui.scss"

interface IModal extends React.PropsWithChildren {
    handleClose: () => void
}

export const ModalUI = ({ children, handleClose }: IModal) => {
    return createPortal(
        <>
            <div className="modal">{children}</div>
            <div
                onClick={handleClose}
                className="backdrop"
            ></div>
        </>,
        document.getElementById("modal-root")!
    )
}