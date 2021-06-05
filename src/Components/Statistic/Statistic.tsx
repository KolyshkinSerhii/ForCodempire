import React, { useEffect, useMemo, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getCountries } from "../../Redux/Selectors"
import { requestCountries } from "../../Redux/Statistic"
import { Country } from "./Country"
import s from './Statistic.module.css'


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
        return countries.filter((c): any => c.Country.includes(searchString));
    }, [searchString, countries]);

    return (
        <div className={s.statistic}>
            <div>
                <div>COVID-19 STATISTIC</div>
                <input type="text" placeholder="Search" onChange={handleChange}></input>
            </div>
            <div className={s.header}>
                <div>Countries</div>
                <div>Total deaths</div>
            </div>
            <div className={s.countries}>
                {filteredCountries.map(c => <Country
                    key={c.ID}
                    Country={c} />)}
            </div>
        </div>
    )
})