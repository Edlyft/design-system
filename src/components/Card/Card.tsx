import React from 'react'
import './card.css'
import CSS from 'csstype'

interface CardProps {
  backgroundColor?: string
  borderRadius?: string
  width?: string
  height?: string
  style?: CSS.Properties
  textColor: string
  children: JSX.Element
  onClick?: () => void
}

export const Card = ({
  borderRadius,
  backgroundColor,
  width,
  textColor,
  height,
  style,
  children,
  ...props
}: CardProps): JSX.Element => {
  return (
    <div
      style={{
        width,
        color: textColor,
        height,
        background: backgroundColor,
        borderRadius,
        ...style,
      }}
      className='edlyft-card'
      {...props}
    >
      {children}
    </div>
  )
}
