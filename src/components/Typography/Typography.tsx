import React from 'react'
import './typography.css'
import CSS from 'csstype'

interface TypographyProps {
  type: string
  label: string
  weight?: string
  style?: CSS.Properties
  lineHeight?: string
}

export const Typography = ({
  type = 'h1',
  label,
  weight,
  lineHeight,
  style,
  ...props
}: TypographyProps) => {
  let weightValue = 'normal'
  if (weight === 'bold') {
    weightValue = 'bold'
  }

  return React.createElement(
    type,
    {
      className: 'edlyft-typography',
      style: { weight: weightValue, ...style },
      ...props,
    },
    label
  )
}
