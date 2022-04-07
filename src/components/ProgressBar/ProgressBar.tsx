import React from 'react'
import { Rate, Progress } from 'antd'
import CSS from 'csstype'
import './progressbar.css'
import 'antd/dist/antd.css'

interface ProgressbarProps {
  backgroundColor?: string
  textColor?: string
  fillPercent: number
  style: CSS.Properties
  onClick?: () => void
}

interface CompoundProgressBarProps extends ProgressbarProps {
  starLabel: number
  starCount: number
}

interface FiveStarRatingsProps extends ProgressbarProps {
  readOnly?: boolean
  averageRating?: number
}

export const ProgressBar = ({
  backgroundColor,
  textColor,
  onClick,
  fillPercent,
  style = {},
  ...props
}: ProgressbarProps) => {
  if (fillPercent) {
    style.width = `${fillPercent}%`
    if (fillPercent > 100) {
      style.width = '100%'
    }
  }
  return (
    <div onClick={onClick} className='edlyft-progressbar-wrapper'>
      <div
        className='edlyft-progressbar-fill'
        style={{ backgroundColor, color: textColor, ...style }}
        {...props}
      ></div>
    </div>
  )
}

export const CompoundProgressBar = ({
  backgroundColor,
  textColor,
  onClick,
  fillPercent,
  starLabel = 5,
  starCount = 9,
  style = {},
  ...props
}: CompoundProgressBarProps) => {
  if (fillPercent) {
    style.width = `${fillPercent}%`
    if (fillPercent > 100) {
      style.width = '100%'
    }
  }
  return (
    <div className='edlyft-progressbar-compound'>
      <div className='edlyft-progressbar-label'>{starLabel} star</div>
      <div onClick={onClick} className='edlyft-progressbar-wrapper'>
        <div
          className='edlyft-progressbar-fill'
          style={{ backgroundColor, color: textColor, ...style }}
          {...props}
        ></div>
      </div>
      <div className='edlyft-progressbar-count'>{starCount} (69.2%)</div>
    </div>
  )
}

interface StarIconProps {
  fill?: string
}

const StarIcon = ({ fill = '#F9E176' }: StarIconProps) => {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M7.6661 12.487L5.06923 13.9137C4.71845 14.1064 4.28459 13.9655 4.10018 13.5989C4.02675 13.453 4.00141 13.2858 4.02808 13.1232L4.52404 10.1014C4.56397 9.85816 4.48679 9.60996 4.31767 9.43769L2.21676 7.29762C1.93297 7.00855 1.92717 6.5338 2.20379 6.23725C2.31394 6.11915 2.45827 6.0423 2.61444 6.01859L5.51784 5.57771C5.75155 5.54222 5.95359 5.38882 6.05811 5.16751L7.35655 2.41816C7.53194 2.04679 7.96221 1.89432 8.31758 2.0776C8.45909 2.15058 8.57364 2.27028 8.64348 2.41816L9.94192 5.16751C10.0464 5.38882 10.2485 5.54222 10.4822 5.57771L13.3856 6.01859C13.7778 6.07814 14.0495 6.45865 13.9925 6.86848C13.9698 7.03168 13.8963 7.18251 13.7833 7.29762L11.6824 9.43769C11.5132 9.60996 11.4361 9.85816 11.476 10.1014L11.9719 13.1232C12.0389 13.5314 11.7766 13.919 11.386 13.9891C11.2305 14.0169 11.0705 13.9905 10.9308 13.9137L8.33392 12.487C8.12488 12.3722 7.87515 12.3722 7.6661 12.487Z'
        fill={fill}
      />
    </svg>
  )
}

export const FiveStar = ({
  onClick,
  backgroundColor,
  readOnly = true,
  averageRating = 4.8,
  style = {},
  ...props
}: FiveStarRatingsProps) => {
  const [value, setValue] = React.useState(2.8)
  const handleChange = (value: number) => {
    setValue(value)
  }
  return (
    <span
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <span className='edlyft-progressbar-average'>
        {readOnly ? averageRating : value}
      </span>
      <Rate
        disabled={readOnly}
        style={{ color: backgroundColor }}
        allowHalf
        onChange={handleChange}
        value={readOnly ? averageRating : value}
      />
    </span>
  )
}
