import React, { ReactElement, ReactPortal } from 'react'
import styled from '@emotion/styled'

const GoBackButton = styled.a`
  text-decoration: none;
  color: black;
  :visited {
    color: black;
  }
  :hover {
    font-weight: bold;
    text-decoration: underline;
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