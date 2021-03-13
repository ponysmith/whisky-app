import React from 'react'

import Header from './Header'
import Page from './Page'
import Footer from './Footer'

import './app.scss'

const App = () => {
  return (
    <div id="app-container">
      <Header />
      <Page />
      <Footer />
    </div>
  )
}

export default App;
