import React from 'react'
import styled from 'styled-components'

function Header() {
  return <StyledHeader>My Books Header</StyledHeader>
}

const StyledHeader = styled.div`
  background: #66bfbf;
  color: white;
  padding: 12px;
`

export default Header
