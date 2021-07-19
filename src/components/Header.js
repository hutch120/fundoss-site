import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

export default function Intro () {
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
      <Typography variant='h6' className={classes.team}>
        We would like to introduce you to a few of your OSS developer team. These are the developers who are down in the engine room making sure things keep running.
      </Typography>
      <Typography variant='h6' className={classes.team}>
        While you are checking out your team, consider the impact these people have on your business.<br />
        What value do these individuals provide?<br />
        What percentage of your business software relies on the systems they maintain to operate effectively?<br />
        Do you think it would be worth supporting these developers to allow them time to maintaining this software?<br />
        What would happen if these developers were not maintaining the OSS products your business relies on?
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
