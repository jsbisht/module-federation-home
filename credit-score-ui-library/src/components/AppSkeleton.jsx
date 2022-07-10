import React from 'react'
import styled from 'styled-components'
import GlobalStyles from './GlobalStyles'

export default function AppSkeleton({ children }) {
  return (
    <>
      <GlobalStyles />
      <StyledApp>{children}</StyledApp>
    </>
  )
}

const StyledApp = styled.div`
  :root {
    margin: 0;
  }
`
