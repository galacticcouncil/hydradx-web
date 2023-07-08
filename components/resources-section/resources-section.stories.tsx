import { Story, Meta } from '@storybook/react'

import ResourcessSection from './resources-section.component'

const meta: Meta = {
  title: 'Sections/Resourcess',
  component: ResourcessSection,
}

export default meta

const Template: Story = (args) => <ResourcessSection {...args} />

export const Default = Template.bind({})

Default.args = {}
