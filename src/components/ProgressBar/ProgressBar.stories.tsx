import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ProgressBar, CompoundProgressBar } from './ProgressBar'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ProgressBar',
  component: ProgressBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProgressBar>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
)

const CompountTemplate: ComponentStory<typeof CompoundProgressBar> = (args) => (
  <CompoundProgressBar {...args} />
)

export const Base = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  backgroundColor: '#F9E27E',
}

export const Compound = CompountTemplate.bind({})
Compound.args = {
  backgroundColor: '#F9E27E',
}
