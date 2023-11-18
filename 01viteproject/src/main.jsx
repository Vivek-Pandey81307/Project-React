import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (<div>
    <h1>Custom App | Hey learner</h1>
  </div>)
}

const reactElement = React.createElement(
  'a',
  {href : 'https://google.com',target : "_blank"},
  'React Click to Google'
)

const anotherElement = (
  <a href='www.google.com' target='_blank'>Visit google from 1 click</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
  
)