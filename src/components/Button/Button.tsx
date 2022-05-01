import React from 'react'
import './button.css'
import CSS from 'csstype'
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
  style?: CSS.Properties
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
  style = {},
  circle = false,
  ...props
}: ButtonProps) => {
  const mode =
    colorMode.length > 1
      ? `edlyft-button--${colorMode}`
      : 'edlyft-button--primary'
  const shape = circle ? 'edlyft-button--circle' : ''
  if (withIcon) {
    style = {
      ...style,
      display: 'flex',
      flexDirection: 'row',
      // justifyContent: 'center',
      // alignItems: 'center',
      // alignContent: 'center',
    }
  }
  return (
    <button
      type='button'
      className={['edlyft-button', `edlyft-button--${size}`, mode, shape].join(
        ' '
      )}
      style={{ backgroundColor, borderRadius }}
      {...props}
    >
      {withIcon ? (
        <>
          <div>{label} </div>
          <div>
            <CaretIcon />
          </div>
        </>
      ) : (
        label
      )}
    </button>
  )
}

interface RoundButtonProps {
  size: 'small' | 'medium' | 'large'
  backgroundColor?: string
  mode: 'primary' | 'secondary' | 'dashed'
  label: string
  iconFill: string
  icon: boolean
  direction: 'backward' | 'forward'
  style?: CSS.Properties
  borderRadius: string
  iconHeight: string
  iconWidth: string
}

export const RoundButton = ({
  size = 'large',
  label,
  style = {},
  icon = false,
  direction = 'forward',
  iconFill,
  iconHeight,
  iconWidth,
  mode,
  borderRadius,
  backgroundColor,
}: RoundButtonProps) => {
  if (size === 'medium') {
    iconHeight = '9'
    iconWidth = '13'
  }

  if (size === 'small') {
    iconHeight = '8'
    iconWidth = '12'
  }
  return (
    <button
      className={[`edlyft-roundbutton--${size}`, `edlyft-button--${mode}`].join(
        ' '
      )}
      style={{ backgroundColor, borderRadius, ...style }}
    >
      {icon ? (
        <ForwardButtonIcon
          height={iconHeight}
          width={iconWidth}
          fill={iconFill}
        />
      ) : (
        label
      )}
    </button>
  )
}

interface IconProps {
  fill: string
  height: string
  width: string
}

export const ForwardButtonIcon = ({ fill, height, width }: IconProps) => {
  return (
    <svg
      width={height ? height : '11'}
      height={width ? width : '16'}
      viewBox='0 0 11 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M9.95508 7.50782L1.15039 0.630859C1.12739 0.612746 1.09974 0.60149 1.07062 0.598383C1.0415 0.595275 1.0121 0.600443 0.98579 0.613293C0.959479 0.626143 0.937326 0.646153 0.921875 0.671026C0.906423 0.695899 0.8983 0.724625 0.898439 0.753906V2.26367C0.898439 2.35938 0.943361 2.45117 1.01758 2.50977L8.04883 8.00001L1.01758 13.4902C0.941408 13.5488 0.898439 13.6406 0.898439 13.7363V15.2461C0.898439 15.377 1.04883 15.4492 1.15039 15.3692L9.95508 8.4922C10.0299 8.43382 10.0905 8.35915 10.1321 8.27387C10.1737 8.18858 10.1954 8.09492 10.1954 8.00001C10.1954 7.9051 10.1737 7.81144 10.1321 7.72615C10.0905 7.64087 10.0299 7.5662 9.95508 7.50782Z'
        fill={fill}
      />
    </svg>
  )
}
