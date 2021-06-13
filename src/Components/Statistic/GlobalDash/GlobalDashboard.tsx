import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { requestGlobalStat } from '../../../Redux/Statistic'
import { AppStateType } from '../../../Redux/Store'
import s from './globalDashboard.module.css'


export const GlobalDashboard: React.FC = () => {

    const globalStat = useSelector((state: AppStateType) => state.StatisticPage.global)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestGlobalStat())
    }, [dispatch])

    return (
        <div>
            <div className={s.Global_title}>Global dashboard</div>
            <div className={s.Global_grid}>
                <div className={s.wrapper}>
                    <div className={s.countries_count}>191</div>
                    <div>Countries with cases</div>
                </div>

                <div className={s.wrapper}>
                    <div>Confirmed Cases</div>
                    <div><div>{globalStat.TotalConfirmed}</div></div>
                    <div>
                        <div>{globalStat.NewConfirmed}</div>
                        <div>new cases</div>
                    </div>
                </div >
                <div className={s.wrapper}>
                    <div>Confirmed deaths</div>
                    <div><div>{globalStat.TotalDeaths}</div></div>
                    <div>
                        <div>{globalStat.NewDeaths}</div>
                        <div>new deaths</div>
                    </div>
                </div>
                <div className={s.wrapper}>
                    <div>Confirmed recovered</div>
                    <div><div>{globalStat.TotalRecovered}</div></div>
                    <div>
                        <div>{globalStat.NewRecovered}</div>
                        <div>new recovered</div>
                    </div>
                </div>
            </div>

        </div>
    )

}