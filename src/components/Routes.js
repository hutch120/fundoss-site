import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Header from './Header'
import Contributors from './Contributors'
import About from './About'
import Intro from './Intro'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

function useQuery () {
  return new URLSearchParams(useLocation().search)
}

export default function Routes () {
  const classes = useStyles()
  const query = useQuery()

  const org = query.get('org')
  const repo = query.get('repo')
  const isValidRepo = !!(org && repo)

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
              <Link to='?org=openlayers&amp;repo=openlayers'>OpenLayers</Link>
            </Typography>
            <Typography variant='body1' className={classes.exampleLink}>
              <Link to='?org=feross&amp;repo=buffer'>Buffer</Link>
            </Typography>
            <Typography variant='body1' className={classes.exampleLink}>
              <Link to='?org=standard&amp;repo=standard'>Standard</Link>
            </Typography>
          </Paper>}

        {isValidRepo &&
          <div>
            <Intro />
            <Contributors org={org} repo={repo} />
          </div>}
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
