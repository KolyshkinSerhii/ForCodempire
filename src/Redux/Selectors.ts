import { createSelector } from 'reselect';
import { AppStateType } from './Store';

// Tutorials Selectors
const getCountriesSelector = (state: AppStateType) => {
    return state.StatisticPage.countries
}

export const getCountries = createSelector(getCountriesSelector, (countries) => {
    return (countries || []).filter( c => true)
})