import React from "react"
import { Website } from "./Website"
import ReactDOM from "react-dom"
import { Router, browserHistory } from "react-router"
import { App } from 'neal-react'

class WebApp extends React.Component {
  render() {
    return (
      <App
        history={ browserHistory }>
        { this.props.children }
      </App>
    );
  }
}

module.exports = {
  WebApp: WebApp,
}