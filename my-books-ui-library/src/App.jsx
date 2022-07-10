import React from 'react'
import ReactDOM from 'react-dom'
import Header from 'uilib/Header'
import AppSkeleton from 'uilib/AppSkeleton'

const App = () => (
  <AppSkeleton>
    <Header />
  </AppSkeleton>
)

ReactDOM.render(<App />, document.getElementById('app'))
