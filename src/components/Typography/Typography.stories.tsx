import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Typography } from './Typography'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Typography',
  component: Typography,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Typography>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
)

export const H1 = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
H1.args = {
  // primary: true,
  label: 'Welcome Back, Gillian H1',
  type: 'h1',
}

export const H2 = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
H2.args = {
  // primary: true,
  label: 'Welcome Back, Gillian H2',
  type: 'h2',
}

export const H3 = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
H3.args = {
  // primary: true,
  label: 'Welcome Back, Gillian',
  type: 'h3',
}

export const H4 = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
H4.args = {
  // primary: true,
  label: 'Welcome Back, Gillian',
  type: 'h4',
}

export const H5 = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
H5.args = {
  // primary: true,
  label: 'Welcome Back, Gillian',
  type: 'h5',
}

export const p = Template.bind({})
p.args = {
  label: 'Here is a paragraph of text',
  type: 'p',
}
