import React from 'react'
import ReactDOM from 'react-dom'
import Header from 'uilib/Header'
import AppSkeleton from 'uilib/AppSkeleton'
import InlineWidget from 'uilib/InlineWidget'

const App = () => (
  <AppSkeleton>
    <Header />
    <InlineWidget message="test message" />
  </AppSkeleton>
)

ReactDOM.render(<App />, document.getElementById('app'))
