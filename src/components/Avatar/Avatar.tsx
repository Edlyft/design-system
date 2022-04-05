import React from 'react'
import DefaultImage from './assets/default-img.png'
import AvatarImage from './assets/avatar-image.png'
import './avatar.css'

interface AvatarProps {
  backgroundColor?: string
  size?: 'xs' | 'sm' | 'md' | 'lg'
  power: 'fused' | 'separated' | 'none'
  label: string
  powerLabel?: number
  textColor?: string
  onClick?: () => void
}

interface ImageAvatarProps extends AvatarProps {
  src?: string
}

export const Avatar = ({
  size = 'md',
  backgroundColor,
  textColor,
  label = 'U',
  onClick,
  power = 'none',
  powerLabel = 99,
  ...props
}: AvatarProps) => {
  return (
    <div className='edlyft-avatar-wrapper'>
      <div
        onClick={onClick}
        style={{ backgroundColor, color: textColor }}
        className={`edlyft-avatar edlyft-avatar-${size}`}
        {...props}
      >
        {label}
      </div>
      {power === 'separated' && (
        <div className='edlyft-avatar-seperated-power'></div>
      )}
      {power === 'fused' && (
        <div className={`edlyft-avatar-fused-power-${size}`}>{powerLabel}</div>
      )}
    </div>
  )
}

export const ImageAvatar = ({
  size = 'md',
  onClick,
  src,
  power = 'none',
  powerLabel = 99,
  ...props
}: ImageAvatarProps) => {
  return (
    <div className='edlyft-avatar-wrapper'>
      <img
        onClick={onClick}
        src={src ? src : DefaultImage}
        className={`edlyft-avatar edlyft-avatar-${size}`}
        {...props}
        alt={AvatarImage}
      />
      {power === 'separated' && (
        <div className='edlyft-avatar-seperated-power'></div>
      )}
      {power === 'fused' && (
        <div className={`edlyft-avatar-fused-power-${size}`}>{powerLabel}</div>
      )}
    </div>
  )
}
