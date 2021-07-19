import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Header from './components/Header'
import Contributors from './components/Contributors'
import About from './components/About'

export default function App () {
  const classes = useStyles()
  return (
    <Router
      basename='fundoss-site'
    >
      <div className={classes.root}>
        <div className={classes.workspace}>
          <Header />
          <Route path='/c/:org/:repo'>
            <Contributors />
          </Route>
          <About />
        </div>
      </div>
    </Router>
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
  }
})
