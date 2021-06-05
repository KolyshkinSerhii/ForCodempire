import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import statisticReducer from './Statistic';



let rootReducers = combineReducers({
    StatisticPage: statisticReducer,
})

type RootReducerType = typeof rootReducers
export type AppStateType = ReturnType<RootReducerType>

let store = createStore(rootReducers, applyMiddleware(thunk))

export type InferActionsType<T> = T extends { [key: string]: (...args: any[]) => infer U} ? U : never
export default store

//@ts-ignore
window.store = store