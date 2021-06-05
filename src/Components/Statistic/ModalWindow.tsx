import React from 'react'

import s from "./ModalWindow.module.css";
type PropsTypeModal = {
    active: boolean
    setActive: (arg0: boolean) => void
}

export const ModalWindow: React.FC<PropsTypeModal> = ({active, setActive, children}) => {

    return (
        <div className={active ? s.modal_active : s.modal} onClick={() => {setActive(false)}} >
            <div className={s.modal_content}>
                {children}
            </div>
        </div>
    )
}