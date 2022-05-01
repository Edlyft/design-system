import React, { useRef } from 'react'
import { Divider } from 'antd'
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
  children?: JSX.Element
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

export const StudentFeedBackCard = ({
  borderRadius,
  backgroundColor,
  width = '450px',
  height,
  style,
  children,
  ...props
}: ComPoundCardProps) => {
  const ref = useRef<any>(null)

  const scroll = (scrollOffset: number): void => {
    ref.current.scrollLeft += scrollOffset
    return
  }

  return (
    <Card
      style={{
        width,
        height,
        background: backgroundColor,
        border: '1px solid #F0F0F0',
        borderRadius,
        ...style,
      }}
      {...props}
    >
      <>
        <Typography
          style={{
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '22px',
            color: '#2C2543',
            marginBottom: 0,
          }}
          label={'Student feedback'}
          type='div'
        />
        <div className='edlyft-card-feedback'>
          <SessionFeedbackCard averageRating={1.1} date='Jul. 16' withDot />
          <SessionFeedbackCard averageRating={4.7} date='Jul. 14' />
          <SessionFeedbackCard averageRating={2.7} date='Jul. 9' />
          <SessionFeedbackCard averageRating={3.6} date='Jul. 7' />
          <SessionFeedbackCard averageRating={3.2} date='Jul. 7' />
        </div>
        <Typography
          style={{
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '0.75rem',
            lineHeight: '1.25rem',
            marginTop: '14px',
            color: '#C0BEC7',
          }}
          label='Hover on a session to view details'
          type='div'
        />
      </>
    </Card>
  )
}

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
  let icon = ''
  if (averageRating <= 2) {
    icon = '🤕'
    backgroundColor = '#FDF0F0'
  } else if (2 < averageRating && 3.5 > averageRating) {
    icon = '🙂'
    backgroundColor = '#FEF8EF'
  } else if (3.5 < averageRating && 4.5 > averageRating) {
    icon = '😁'
  } else if (4.5 <= averageRating) {
    icon = '🤩'
  }

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
      <div className='edlyft-feedback-icon'>{icon}</div>
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

export const ZoomCard = ({
  borderRadius = '16px',
  backgroundColor = '#FFFFFF',
  width = '234px',
  height = '75px',
  style,
  children,
  ...props
}: ComPoundCardProps): JSX.Element => {
  return (
    <Card
      style={{
        width,
        height,
        padding: '0',
        // padding: '8px 4px',
        background: backgroundColor,
        borderRadius,
        ...style,
      }}
      {...props}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: '16px 19px 16px 13px',
          height: '100%',
          width: '100%',
        }}
      >
        <div>
          <Typography
            label='12:00 pm - 12:15 pm'
            textColor='#2C2543'
            type='div'
          />
          <Typography
            label='Adetokunbo Abiola'
            textColor='#BABABA'
            type='div'
          />
        </div>
        <Divider
          style={{
            height: '100%',
          }}
          type='vertical'
        />
        <div>
          <Typography
            style={{
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '22px',
            }}
            label='Join'
            textColor='#4290F3'
            type='div'
          />
        </div>
      </div>
    </Card>
  )
}
