import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import Routes from './components/Routes'

export default function App () {
  return (
    <Router basename='fundoss-site'>
      <Routes />
    </Router>
  )
}
