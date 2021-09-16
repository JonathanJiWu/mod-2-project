import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PrimarySearchAppBar from './comps/TopBar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={12}>
          <PrimarySearchAppBar className={classes.paper}/>
        </Grid>

        <Grid item xs={12} sm={1}>
          <Paper className={classes.paper}>space</Paper>
        </Grid>
        <Grid item xs={12} sm={10}>
          <Paper className={classes.paper}>search results</Paper>
        </Grid>
        <Grid item xs={12} sm={1}>
          <Paper className={classes.paper}>space</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
