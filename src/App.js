import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './components/Routes'

export default function App () {
  return (
    <Router basename='fundoss-site'>
      <Routes />
    </Router>
  )
}
