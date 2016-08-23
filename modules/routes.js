import React from 'react'
import {Route, browserHistory, IndexRoute} from 'react-router'
import { Website } from './Website'
import { WebApp } from './App.jsx'

module.exports = (
	<Route path="/" component={ WebApp } history={ browserHistory }>
      <IndexRoute name="home" component={ Website }/>
      <Route path="*" component={ Website }/>
    </Route>
)