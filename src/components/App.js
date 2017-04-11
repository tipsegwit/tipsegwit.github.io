import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import s from '../styles/app.style'

const propTypes = {
  children: PropTypes.element.isRequired,
  routes: PropTypes.array.isRequired
}

const buildNavigation = (routes) => (
  routes.map((route, index, array) => (
    <span key={index}>
      <Link to={route.path}>
        {route.mapMenuTitle}
      </Link>
      {(index + 1) < array.length && ' / '}
    </span>
  ))
)

const App = ({ children, routes }) => (
  <div style={s.root}>
    <h1 style={s.title}>Single Page Apps for GitHub Pages</h1>
    <nav style={s.mapMenu}>
      {buildNavigation(routes[0].childRoutes.slice(0, -1))}
    </nav>
    {children}
  </div>
)

App.propTypes = propTypes

export default App
