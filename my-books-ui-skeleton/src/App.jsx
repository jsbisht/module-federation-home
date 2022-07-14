import React from 'react'
import ReactDOM from 'react-dom'
import Header from 'uilib/Header'
import AppSkeleton from 'uilib/AppSkeleton'
import Routes from './routes'

const App = () => (
  <AppSkeleton>
    <Header name={'{UI Skeleton}'} />
    <Routes />
  </AppSkeleton>
)

ReactDOM.render(<App />, document.getElementById('app'))
