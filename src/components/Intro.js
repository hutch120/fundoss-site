import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InfoIcon from '@material-ui/icons/Info'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

export default function Intro () {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <div className={classes.container}>
          <InfoIcon className={classes.icon} />
          <Typography variant='body' className={classes.intro}>
            OpenLayers is a high-performance feature-packed Javascript library for creating interactive maps on the web. It can display map tiles, vector data and markers loaded from any source on any web page.
            Openlayers is packed with value and released under the BSD 2-Clause License.
          </Typography>
        </div>
      </Paper>
    </div>
  )
}

const useStyles = makeStyles({
  root: {},
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    padding: 20,
    marginBottom: 8
  },
  icon: {
    paddingRight: 14,
    fontSize: 60,
    color: '#5d5db3'
  },
  iconAccount: {
    paddingRight: 14,
    fontSize: 60,
    color: '#3ca73c'
  },
  intro: {}
})
