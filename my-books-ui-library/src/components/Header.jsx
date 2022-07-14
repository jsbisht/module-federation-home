import React from 'react'
import styled from 'styled-components'

function Header({ name }) {
  return <StyledHeader>My Books Header {name}</StyledHeader>
}

const StyledHeader = styled.div`
  background: #66bfbf;
  color: white;
  padding: 12px;
`

export default Header
