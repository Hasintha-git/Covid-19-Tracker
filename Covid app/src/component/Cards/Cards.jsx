import React from 'react'
import { Card,CardContent,Typography,Grid } from '@material-ui/core';
import Styles from "./Cards.module.css";
import CountUp from "react-countup";
import Cx from "classnames";

const Cards = ({ data : { confirmed, recovered, deaths, lastUpdate } }) => {
   
    if(!confirmed){
        return 'Loading ...';
    }
    
    return (
        <div className={Styles.container}>
           <Grid container spacing={3} justify="center">
               <Grid item component={Card} xs={12} md={3} className={Cx(Styles.card , Styles.infected)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Infected</Typography>
                    <Typography variant="h5">
                        <CountUp start={0} end={confirmed.value} duration={2.5} separator=","/>
                        </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of active cases of COVID-19</Typography>

                </CardContent>
               </Grid>
               <Grid item component={Card} xs={12} md={3} className={Cx(Styles.card , Styles.recovered)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                    <Typography variant="h5">
                        <CountUp start={0} end={recovered.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of recoveries cases of COVID-19</Typography>
                    
                </CardContent>
               </Grid>
               <Grid item component={Card} xs={12} md={3} className={Cx(Styles.card , Styles.deaths)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                    <Typography variant="h5">
                        <CountUp start={0} end={deaths.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of death cases of COVID-19</Typography>
                    
                </CardContent>
               </Grid>

           </Grid>
        </div>
    )
}

export default Cards
