import React from 'react'
import s from "./Footer.module.css"


export const Footer: React.FC = () => {

    return (
        <div className={s.footer}>
            <a href="https://www.who.int/" target="_blank" title="Visit the WHO website" rel="noreferrer">
                <img src="https://www.gavi.org/sites/default/files/images/who-footer2.png" alt="" />
                </a>
            <a href="https://www.unicef.org/" target="_blank" title="Visit the UNICEF website" rel="noreferrer">
                <img src="https://www.gavi.org/sites/default/files/images/unicef-footer2.png" alt="" />
                </a>
            <a href="https://www.gatesfoundation.org/" target="_blank" title="Visit the Gates foundation website" rel="noreferrer">
                <img src="https://www.gavi.org/sites/default/files/images/gates-foundation-footer2.png" alt="" />
                </a>
        </div>
    )

}