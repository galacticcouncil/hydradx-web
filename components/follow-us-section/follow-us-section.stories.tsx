import { Story, Meta } from "@storybook/react"

import FollowUsSection from "./follow-us-section.component"

const meta: Meta = {
	title: "Sections/FollowUs",
	component: FollowUsSection,
}

export default meta

const Template: Story = (args) => <FollowUsSection {...args} />

export const Default = Template.bind({})

Default.args = {}
