import React, { useEffect, useMemo, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getCountries } from "../../Redux/Selectors"
import { requestCountries } from "../../Redux/Statistic"
import { Country } from "./Country"
import s from './Statistic.module.css'
import CovidLogo from "./..//..//images/covid-logo.png"
import { GlobalDashboard } from "./GlobalDash/GlobalDashboard"
import { Footer } from "./Footer/Footer"


export const Statistic: React.FC = React.memo(() => {

    const countries = useSelector(getCountries)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestCountries())
    }, [dispatch])

    const [searchString, setSearchString] = useState("");

    function handleChange(e: any) {
        setSearchString(e.target.value);
    }


    const filteredCountries = useMemo(() => {
        if (!searchString) {
            return countries;
        }
        return countries.filter((c): any => c.Country.match(new RegExp(searchString, 'i')));
    }, [searchString, countries]);

    return (
        <div className={s.statistic}>
            <div className={s.header}>
                <div className={s.wrapper}>
                    <img className={s.logo} src={CovidLogo} alt="" />
                    <div className={s.stat}>STATISTIC</div>
                </div>
            </div>
            <GlobalDashboard />
            <div>COVID-19 has put health systems under tremendous strain, with countries across the developing world facing their biggest test in living memory. This dashboard keeps track of COVID-19 cases and deaths globally.</div>
            <hr />
            <div>
                <input className={s.search} type="text" placeholder="Search..." onChange={handleChange}></input>
            </div>
            <div className={s.list}>
                <div>№</div>
                <div className={s.list_country} >Country</div>
                <div className={s.list_total}>Total confirmed</div>
            </div>
            <ol className={s.countries}>
                {filteredCountries.map(c =>
                    <li key={c.ID}>
                        <Country
                            Country={c} />
                    </li>)}
            </ol>
            <hr />
            <Footer />
        </div>
    )
})