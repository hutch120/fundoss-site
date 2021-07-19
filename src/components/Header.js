import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

export default function Header () {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <img src={`${process.env.PUBLIC_URL}/logo192.png`} className={classes.icon} />
        <Typography variant='h3' className={classes.header}>
          FundOSS
        </Typography>
      </div>
      <Typography variant='h5' className={classes.subheader}>
        Promoting funding for Open Source Software - OSS
      </Typography>
    </div>
  )
}

const useStyles = makeStyles({
  root: {},
  header: {
    marginLeft: 10,
    color: '#bbbbbb'
  },
  subheader: {
    marginLeft: 10,
    color: '#7d7d7d'
  },
  team: {
    margin: 10,
    color: '#7d7d7d',
    fontSize: 16
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
