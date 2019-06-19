import React from 'react'
import ReactDOM from 'react-dom'
import './css/style.css'

ReactDOM.render(
  <h1>Hello World!</h1>,
  document.getElementById('react-container') // eslint-disable-line no-undef
)
// Needed for Hot Module Replacement
if(typeof(module.hot) !== 'undefined') { // eslint-disable-line no-undef  
  module.hot.accept()                    // eslint-disable-line no-undef  
}