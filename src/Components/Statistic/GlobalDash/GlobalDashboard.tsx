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
        <div className={s.Global_dashboard} >
            <div className={s.Global_title}>Global dashboard</div>
            <div className={s.Global_grid}>
                <div className={s.wrapper}>
                    <div className={s.count}>191</div>
                    <div className={s.wrapper_text}>Countries with cases</div>
                </div>

                <div className={s.wrapper}>
                    <div className={s.wrapper_text} >Confirmed Cases</div>
                    <div className={s.count}>{globalStat.TotalConfirmed}</div>
                    <div>
                        <div className={s.count_newStat}>{globalStat.NewConfirmed}</div>
                        <div className={s.wrapper_text}>new cases</div>
                    </div>
                </div >
                <div className={s.wrapper}>
                    <div className={s.wrapper_text}>Confirmed deaths</div>
                    <div className={s.count}>{globalStat.TotalDeaths}</div>
                    <div>
                        <div className={s.count_newStat}>{globalStat.NewDeaths}</div>
                        <div className={s.wrapper_text}>new deaths</div>
                    </div>
                </div>
                <div className={s.wrapper}>
                    <div className={s.wrapper_text}>Confirmed recovered</div>
                    <div className={s.count}>{globalStat.TotalRecovered}</div>
                    <div>
                        <div className={s.count_newStat}>{globalStat.NewRecovered}</div>
                        <div className={s.wrapper_text}>new recovered</div>
                    </div>
                </div>
            </div>

        </div>
    )

}