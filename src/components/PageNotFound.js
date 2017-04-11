import React from 'react'
import PropTypes from 'prop-types'
import s from '../styles/pageNotFound.style'

const propTypes = {
  location: PropTypes.object.isRequired
}

const PageNotFound = ({ location }) => {
  return (
    <p style={s.p}>
      Page not found - the path, {s.code(location.pathname)},
      did not match any React Router routes.
    </p>
  )
}

PageNotFound.propTypes = propTypes

export default PageNotFound
