import React, { useState } from "react";
import { CountryType } from "../../Redux/Statistic";
import s from "./Country.module.css";
import { ModalWindow } from "./ModalWindow";

type PropsType = {
    Country: CountryType;
};

export const Country: React.FC<PropsType> = React.memo(({ Country }): JSX.Element => {

    let [modalActive, SetModalActive] = useState(false)

    return (
        <div className={s.country}>
            <button className={s.countryButton} onClick={() => {SetModalActive(true)}}>{Country.Country}</button>
            <div>{Country.TotalDeaths}</div>
            <ModalWindow active={modalActive} setActive={SetModalActive}>
                <div>{Country.Country}</div>
                <div>Total confirmed: {Country.TotalConfirmed}</div>
                <div>Total deaths: {Country.TotalDeaths}</div>
                <div>Total recovered: {Country.TotalRecovered}</div>
            </ModalWindow>
        </div>
    );
});