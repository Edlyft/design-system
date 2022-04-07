import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Card, SessionFeedbackCard, CompoundCard } from './Card'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Card>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />
const SessionFeedBackCardTemplate: ComponentStory<typeof SessionFeedbackCard> =
  (args) => <SessionFeedbackCard {...args} />
const CompoundCardTemplate: ComponentStory<typeof CompoundCard> = (args) => (
  <CompoundCard {...args} />
)

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  // primary: true,
  children: <span>Welcome Back, Gillian</span>,
}

export const SessionFeedBack = SessionFeedBackCardTemplate.bind({})
SessionFeedBack.args = {
  averageRating: 4.8,
  withDot: true,
}

export const Compound = CompoundCardTemplate.bind({})
Compound.args = {
  backgroundColor: '#EBF3FD',
  borderRadius: '5px',
}
