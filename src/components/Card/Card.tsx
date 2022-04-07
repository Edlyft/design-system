import React from 'react'
import './card.css'
import CSS from 'csstype'
import { Typography } from '../Typography/Typography'
import { Button } from '../Button/Button'

interface CardProps {
  backgroundColor?: string
  borderRadius?: string
  width?: string
  height?: string
  style?: CSS.Properties
  textColor?: string
  children: JSX.Element
  onClick?: () => void
}

interface FeedbackCardProps extends CardProps {
  date: string
  averageRating: number
  withDot?: boolean
}

interface ComPoundCardProps extends CardProps {
  headerText: string
  subText: string
  textColor?: undefined
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

export const CompoundCard = ({
  borderRadius,
  backgroundColor,
  width,
  height,
  style,
  children,
  ...props
}: ComPoundCardProps) => {
  return (
    <Card
      style={{
        width,
        height,
        background: backgroundColor,
        borderRadius,
        ...style,
      }}
      {...props}
    >
      <>
        <div className='edlyft-card-intro'>
          <Typography
            type='h4'
            lineHeight='28px'
            weight={700}
            style={{
              fontSize: '1.25rem',
              marginBottom: '0.625rem',
            }}
            label='Welcome Back, Gillian'
          />
          <Typography
            textColor='#6B667B'
            type='p'
            weight={400}
            lineHeight='22px'
            style={{
              fontSize: '14px',
              marginTop: 0,
            }}
            label="Here's the latest on your CS61A Cohort."
          />
        </div>
        <Button
          borderRadius='0.35rem'
          colorMode='primary'
          size='small'
          withIcon
          label='Add new'
        />
      </>
    </Card>
  )
}

// export const StudentFeedBackCard = ({}) => {
//   return (
//   <div>
//     <Typography  />

//   </div>)
// }

export const SessionFeedbackCard = ({
  borderRadius,
  backgroundColor,
  width,
  textColor,
  height,
  withDot,
  style,
  date = 'Jul. 14',
  averageRating = 4.7,
  children,
  ...props
}: FeedbackCardProps): JSX.Element => {
  const BaseCard = () => (
    <div
      style={{
        width,
        color: textColor,
        height,
        background: backgroundColor,
        borderRadius,
        ...style,
      }}
      className='edlyft-feedback-card'
      {...props}
    >
      <div></div>
      <div className='edlyft-feedback-date'>{date}</div>
      <div className='edlyft-feedback-rating'>{averageRating}</div>
      <div className='edlyft-feedback-icon'>😂</div>
    </div>
  )
  if (!withDot) {
    return <BaseCard />
  } else {
    return (
      <div className=''>
        <div className='edlyft-card-dot'></div>
        <BaseCard />
      </div>
    )
  }
}
