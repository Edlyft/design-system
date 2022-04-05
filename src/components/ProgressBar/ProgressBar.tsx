import React from 'react'
import CSS from 'csstype'
import './progressbar.css'

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
