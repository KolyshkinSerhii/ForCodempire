import React, { useState } from "react";
import { CountryType } from "../../Redux/Statistic";
import s from "./Country.module.css";
import { makeStyles } from '@material-ui/core/styles';
import health from './/..//..//images/health.png'
import death from './/..//..//images/death.png'
import recovered from './//..//..//images/recover.png'
import { Modal, Backdrop, Fade } from "@material-ui/core";

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
        width: '500px',
        alignItems: 'center',
        backgroundColor: theme.palette.background.paper,
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
        display: 'grid',
        gridTemplateColumns: '1fr 3fr 2fr 3fr 2fr',
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
                            <div>New confirmed</div>
                            <div>{Country.NewConfirmed}</div>
                            <div>Total confirmed</div>
                            <div>{Country.TotalConfirmed}</div>
                        </div>
                        <div className={classes.info}>
                            <img src={death} alt=''></img>
                            <div>New deaths</div>
                            <div>{Country.NewDeaths}</div>
                            <div>Total deaths</div>
                            <div>{Country.TotalDeaths}</div>
                        </div>
                        <div className={classes.info}>
                            <img src={recovered} alt=''></img>
                            <div>New recovered</div>
                            <div>{Country.NewRecovered}</div>
                            <div>Total recovered</div>
                            <div>{Country.TotalRecovered}</div>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
});