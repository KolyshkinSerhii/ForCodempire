import { ThunkAction } from 'redux-thunk';
import { Summary } from '../API/API';
import { AppStateType, InferActionsType } from './Store';


export type GlobalType = {
    NewConfirmed: number
    NewDeaths: number
    NewRecovered: number
    TotalConfirmed: number
    TotalDeaths: number
    TotalRecovered: number
}

export type CountryType = {
    ID: string
    Country: string
    TotalConfirmed: number
    TotalDeaths: number
    TotalRecovered: number
    NewConfirmed: number
    NewDeaths: number
    NewRecovered: number
}

const initialState = {
    countries: [] as Array<CountryType>,
    global: {} as GlobalType
}

export type InitialStateType = typeof initialState

const statisticReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {

        case 'SET-COUNTRIES':
            return {
                ...state, countries: action.payload
            };
        case 'SET-GLOBAL':
            return {
                ...state, global: action.payload
            };
        default:
            return state
    }
}

type ActionTypes = InferActionsType<typeof actions>

export const actions = {
    setCountriesAC: (countries: Array<CountryType>) => ({
        type: 'SET-COUNTRIES',
        payload: countries
    } as const),
    setGlobalAC: (global: GlobalType) => ({
        type: 'SET-GLOBAL',
        payload: global
    })
}

export const requestCountries = (): ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes> => async (dispatch) => {
    let data = await Summary.getSummary()

    dispatch(actions.setCountriesAC(data.Countries))
}

export const requestGlobalStat = (): ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes> => async (dispatch) => {
    let data = await Summary.getSummary()

    dispatch(actions.setGlobalAC(data.Global))
}



export default statisticReducer