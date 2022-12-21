import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  children: ReactNode
  to: string
}

const CustomLink = (props: Props) => {
  return (
    <Link to={props.to} style={{ textDecoration: 'none', color: 'black' }}>{props.children}</Link>
  )
}

export default CustomLink