import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Graph from './Graph';
import Data from "../computers/Data";
import InputSection from "./InputSection";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop : "12px"
    
  },
  inputPaper: {
    height: "40vh",
    overflow: "auto",
    paddingBottom: theme.spacing(2)

  },
  graphPaper: {
    height: "85vh"
  }

}));

export default function SimpleContainer() {
  const classes = useStyles();
  const data = Data();
  return (
    <Container maxWidth={false} className={classes.root} style={{ backgroundColor: '#efefef' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="flex-start" spacing={1}>
            <Grid xs={12} sm={12} md={4} lg={4} xl={4} key={1} item>
              <Paper className={classes.inputPaper} spacing={2}>
               <InputSection> </InputSection>
              </Paper>
            </Grid>
            <Grid xs={12} sm={12} md={8} lg={8} xl={8} key={2} item>
              <Paper className={classes.graphPaper}><Graph data={data}></Graph></Paper>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </Container>



  );
}
