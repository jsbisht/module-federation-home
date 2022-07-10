import React from 'react'
import ReactDOM from 'react-dom'
import AppSkeleton from 'uilib/AppSkeleton'
import HomePage from 'uihome/HomePage'

function App() {
  return (
    <AppSkeleton>
      <HomePage />
    </AppSkeleton>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
