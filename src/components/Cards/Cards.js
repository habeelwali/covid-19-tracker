import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from 'classnames';


export default function MediaCard({ data: { confirmed , recovered, deaths, lastUpdate } }) {
 

  if (!confirmed) {
    return 'loadong....'
  }


  return (
    <div  className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>


          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Infacted
          </Typography>
            <Typography variant="body2" component="p">
              <CountUp start={0} end={confirmed.value} separator="," />
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              number of active cases of covid-19
          </Typography>
          </CardContent>

          <CardActions style={{ color: "red" }}>

          </CardActions>
        </Grid>


        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>



          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Recovered
          </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <CountUp start={0} end={recovered.value} separator="," />
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              number of recoveries from covid-19
          </Typography>
          </CardContent>

          <CardActions style={{ color: "red" }}>

          </CardActions>

        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>


          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Deaths
          </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <CountUp start={0} end={deaths.value} separator="," />
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              number of deaths caused by covid-19
          </Typography>
          </CardContent>

          <CardActions style={{ color: "red" }}>

          </CardActions>

        </Grid>
      </Grid>
    </div>

  );
}