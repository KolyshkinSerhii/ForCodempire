import React, { useState } from "react";
import { CountryType } from "../../Redux/Statistic";
import s from "./Country.module.css";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import health from './/..//..//images/health.png'
import death from './/..//..//images/death.png'
import recovered from './//..//..//images/recover.png'

type PropsType = {
    Country: CountryType;
};

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        width: '300px',
        alignItems: 'center',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        borderRadius: '10px'
    },
    country: {
        fontSize: '20px',
        fontWeight: "bold",
        textAlign: 'center',
        paddingBottom: '20px',
    },
    info: {
        display: 'flex',
        justifyContent: 'space-between',
        textAlign: 'left',
        padding: '15px'
    },

}));

export const Country: React.FC<PropsType> = React.memo(({ Country }): JSX.Element => {

    let [open, setOpen] = useState(false)
    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div className={s.country}>
                <button className={s.country_bottom} onClick={handleOpen}>{Country.Country}</button>
                <div className={s.total} >{Country.TotalConfirmed}</div>
            </div>
            <Modal className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}>
                <Fade in={open}>
                    <div className={classes.paper}>
                        <div className={classes.country}>{Country.Country}</div>
                        <div className={classes.info}>
                            <img src={health} alt=''></img>
                            <div>Total confirmed</div>
                            <div>{Country.TotalConfirmed}</div>
                        </div>
                        <div className={classes.info}>
                            <img src={death} alt=''></img>
                            <div>Total deaths</div>
                            <div>{Country.TotalDeaths}</div>
                        </div>
                        <div className={classes.info}>
                            <img src={recovered} alt=''></img>
                            <div>Total recovered</div>
                            <div>{Country.TotalRecovered}</div>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
});