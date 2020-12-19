import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1 ,
    justifyContent: 'center'

  },
  
}));

export default function PositionInputHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       <Grid container justify='space-around' spacing = {1} alignItems="center">
       <Grid item xs = {1} >
         <InputHeaderTypography>-</InputHeaderTypography>
        </Grid>
        <Grid item xs = {2} >
         <InputHeaderTypography>Buy/Sell</InputHeaderTypography>
        </Grid>
        <Grid item xs = {2}>
            <InputHeaderTypography>Strike</InputHeaderTypography>
        </Grid>
        <Grid item xs = {2}>
            <InputHeaderTypography>Premium</InputHeaderTypography> 
        </Grid>
        <Grid item xs = {2}>
             <InputHeaderTypography>Put/Call</InputHeaderTypography> 
        </Grid>   
        <Grid item xs = {1}>
             <InputHeaderTypography>-</InputHeaderTypography> 
        </Grid>        
      </Grid>
      
    </div>
  );
}

const InputHeaderTypography = withStyles({
    root: {    
      color: "#9c9c9c",
      fontSize: "12px",
      fontWeight : 600,
      textAlign: "center",

    }
  })(Typography);
