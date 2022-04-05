import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Avatar, ImageAvatar } from './Avatar'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Avatar',
  component: Avatar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Avatar>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />
const ImageTemplate: ComponentStory<typeof ImageAvatar> = (args) => (
  <ImageAvatar {...args} />
)

export const Base = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  size: 'md',
  label: 'U',
}

export const Image = ImageTemplate.bind({})
Image.args = {
  size: 'md',
  src: 'https://i.postimg.cc/CKXPffmB/avatar-image.png',
}

export const Default = ImageTemplate.bind({})
Default.args = {
  size: 'md',
}
