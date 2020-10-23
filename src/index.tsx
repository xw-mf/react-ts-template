import React from 'react'
import ReactDom from 'react-dom'
import App from './app'

if (module && module.hot) {
  module.hot.accept()
}

ReactDom.render(<App />, document.querySelector('#root'))
