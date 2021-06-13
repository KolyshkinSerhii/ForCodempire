import Axios from 'axios';
import { CountryType, GlobalType } from '../Redux/Statistic';


export const instance = Axios.create({
    headers: {
        "Content-type": "application/json"
    },
    baseURL: 'https://api.covid19api.com/'
})

//TYPES

type GlobalStatType = {
    Global: GlobalType
}

type CountriesType = {
    Countries: Array<CountryType>
}

// API for Countries

export const Summary = {
    getSummary() {
        return instance.get<CountriesType & GlobalStatType>(`/summary`).then(res => {
            return res.data
        })
    },
}