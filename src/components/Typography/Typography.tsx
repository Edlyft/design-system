import React from 'react'
import './typography.css'
import CSS from 'csstype'

interface TypographyProps {
  type: string
  label: string
  weight?: number
  textColor?: string
  style?: CSS.Properties
  lineHeight?: string
}

export const Typography = ({
  type = 'h1',
  label,
  weight,
  lineHeight,
  textColor,
  style = {},
  ...props
}: TypographyProps) => {
  return React.createElement(
    type,
    {
      className: 'edlyft-typography',
      style: { fontWeight: weight, color: textColor, ...style },
      ...props,
    },
    label
  )
}
