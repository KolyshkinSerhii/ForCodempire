import { ThunkAction } from 'redux-thunk';
import { Countries } from '../API/API';
import { AppStateType, InferActionsType } from './Store';


export type CountryType = {
    ID: string
    Country: string
    TotalConfirmed: number
    TotalDeaths: number
    TotalRecovered: number
}

const initialState = {
    countries: [] as Array<CountryType>,
}

export type InitialStateType = typeof initialState

const statisticReducer = (state = initialState, action: any) : InitialStateType => {
    switch(action.type) {
        
        case 'SET-COUNTRIES':
            return {
                ...state, countries: action.payload
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
}

export const requestCountries = (): ThunkAction<Promise<void>,AppStateType, unknown, ActionTypes> => async (dispatch) => {
    let data = await Countries.getCountries()

    dispatch(actions.setCountriesAC(data.Countries))
}

export default statisticReducer