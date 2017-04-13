import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import App from './components/App'
import Home from './components/Home'
import About from './components/About'
import Faq from './components/Faq'
import PageNotFound from './components/PageNotFound'

import './styles/global.scss'

render(
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" mapMenuTitle="Home" component={Home} />
      <Route path="/about" mapMenuTitle="About" component={About} />
      <Route path="/faq" mapMenuTitle="FAQ" component={Faq} />
      <Route path="*" mapMenuTitle="Page Not Found" component={PageNotFound} />
    </Route>
  </Router>,
  document.getElementById('root')
)
