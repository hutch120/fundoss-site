import React from 'react'
import { Route, useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Header from './Header'
import Contributors from './Contributors'
import About from './About'
import Intro from './Intro'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

export default function Routes () {
  const classes = useStyles()
  const params = useParams()

  const org = params?.org
  const repo = params?.repo
  const isValidRepo = (org && repo)

  return (
    <div className={classes.root}>
      <div className={classes.workspace}>
        <Header />
        {!isValidRepo &&
          <Paper className={classes.exampleLinkWrapper}>
            <Typography variant='h6' className={classes.exampleLink}>
              Checkout some of these OSS projects
            </Typography>
            <Typography variant='body1' className={classes.exampleLink}>
              <a href='c/openlayers/openlayers'>OpenLayers</a>
            </Typography>
            <Typography variant='body1' className={classes.exampleLink}>
              <a href='c/feross/buffer'>Buffer</a>
            </Typography>
            <Typography variant='body1' className={classes.exampleLink}>
              <a href='c/standard/standard'>Standard</a>
            </Typography>
          </Paper>}

        {isValidRepo &&
          <Route path='/c/:org/:repo'>
            <Intro />
            <Contributors />
          </Route>}
        <About />
      </div>
    </div>
  )
}

const useStyles = makeStyles({
  root: {
    padding: 20,
    minHeight: 'calc(100vh - 40px)',
    backgroundColor: '#282c34',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  workspace: {
    maxWidth: 800,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  exampleLinkWrapper: {
    marginTop: 10,
    marginBottom: 10,
    padding: 10
  },
  exampleLink: {
    marginLeft: 10
  }
})
