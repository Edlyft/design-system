import React from 'react'
import './button.css'
import { ReactComponent as CaretIcon } from './assets/ant-design_caret-down-filled.svg'

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  // primary?: boolean
  /**
   * What background color to use
   */
  backgroundColor?: string
  borderRadius?: string
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large'
  colorMode: string
  withIcon?: boolean
  circle?: boolean
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  colorMode = 'primary',
  size = 'medium',
  backgroundColor,
  borderRadius,
  withIcon = false,
  label,
  circle = false,
  ...props
}: ButtonProps) => {
  const mode =
    colorMode.length > 1
      ? `edlyft-button--${colorMode}`
      : 'edlyft-button--primary'
  const shape = circle ? 'edlyft-button--circle' : ''
  return (
    <button
      type='button'
      className={['edlyft-button', `edlyft-button--${size}`, mode, shape].join(
        ' '
      )}
      style={{ backgroundColor, borderRadius }}
      {...props}
    >
      {label}
      {withIcon && <CaretIcon />}
    </button>
  )
}
