import React from 'react'
import styled from 'styled-components'

function InlineWidget({ message }) {
  return <StyledInlineWidget>{message}</StyledInlineWidget>
}

const StyledInlineWidget = styled.div`
  background: #f5eddc;
  color: #eb4747;
  margin: 12px;
  padding: 12px;
  width: 400px;
`

export default InlineWidget
