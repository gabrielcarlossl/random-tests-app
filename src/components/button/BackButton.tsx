import React, { ReactElement, ReactPortal } from 'react'
import styled from '@emotion/styled'

const GoBackButton = styled.a`
  text-decoration: none;
  color: black;
  border: 2px solid black;
  border-radius: 8px;
  padding: 5px 13px;
  :visited {
    color: black;
  }
  :hover {
    background-color: #cccc;
  }
  :active {
    background-color: #666;
  }
`

type ReactText = string | number;
type ReactChild = ReactElement | ReactText;

type ReactNode = ReactChild | ReactPortal | boolean | null | undefined;

type Props = {
  children: ReactNode
  url: string
}

const BackButton = ({url, children}: Props) => {
  return (
    <GoBackButton href={url}>{children}</GoBackButton>
  )
}

export default BackButton