import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

export default function Intro () {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <img src={`${process.env.PUBLIC_URL}/img/openlayers.png`} className={classes.icon} />
        <Typography variant='h3' className={classes.header}>
          OpenLayers
        </Typography>
      </div>
      <Typography variant='h5' className={classes.subheader}>
        Ignoring Open Source Software funding is risky business!
      </Typography>
    </div>
  )
}

const useStyles = makeStyles({
  root: {},
  header: {
    marginLeft: 10,
    marginBottom: 10,
    color: '#bbbbbb'
  },
  subheader: {
    marginLeft: 10,
    marginBottom: 18,
    color: '#7d7d7d'
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    height: 40
  }
})
