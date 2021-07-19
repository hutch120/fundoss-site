import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

export default function Intro () {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography variant='body' className={classes.subheader}>
        FundOSS is OSS! Please check it out <a href='https://github.com/hutch120/fundoss-site'>HERE</a>
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
