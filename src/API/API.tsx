import Axios from 'axios';
import { CountryType } from '../Redux/Statistic';


export const instance = Axios.create({
    headers: {
        "Content-type": "application/json"
    },
    baseURL: 'https://api.covid19api.com/'
})

//TYPES

type CountriesType = {
    Countries: Array<CountryType>
}

// API for Countries

export const Countries = {
    getCountries() {
        return instance.get<CountriesType>(`/summary`).then(res => {
            return res.data
        })
    },
}