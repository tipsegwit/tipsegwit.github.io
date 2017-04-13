import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import s from '../styles/app.style'
import QRCode from 'qrcode.react'

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
    </span>
  ))
)

const App = ({ children, routes }) => (
  <div className='root'>
    <div className='wrapper' style={s.wrapper}>
      <h1 className='title'>TipSegWit</h1>
      <h2 className='subtitle'>Tip miners signaling for segwit</h2>
      <nav className='map-menu'>
        {buildNavigation(routes[0].childRoutes.slice(0, -1))}
      </nav>
      <div className='qr-wrapper'>
        <QRCode size={280} value="bitcoin:12A1MyfXbW6RhdRAZEqofac5jCQQjwEPBu?amount=1.2&message=Donation&label=Slush" />
        {children}
      </div>
    </div>
  </div>
)

App.propTypes = propTypes

export default App
