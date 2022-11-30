import { Story, Meta } from "@storybook/react"

import JoinTheNetworkSection from "./join-the-network-section.component"

const meta: Meta = {
	title: "Sections/Join the Network",
	component: JoinTheNetworkSection,
}

export default meta

const Template: Story = (args) => <JoinTheNetworkSection {...args} />

export const Default = Template.bind({})

Default.args = {}
