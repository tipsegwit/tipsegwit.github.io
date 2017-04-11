import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './components/App'
import Home from './components/Home'
import About from './components/About'
import Faq from './components/Faq'
import PageNotFound from './components/PageNotFound'

const routes = (
  <Route path="/" mapMenuTitle="Home" component={App}>
    <IndexRoute component={Home} />

    <Route path="about" mapMenuTitle="About" component={About} />
    <Route path="faq" mapMenuTitle="FAQ" component={Faq} />

    <Route path="*" mapMenuTitle="Page Not Found" component={PageNotFound} />
  </Route>
)

render(
  <Router
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('root')
)
