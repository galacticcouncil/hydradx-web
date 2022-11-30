import { Story, Meta } from "@storybook/react"

import ProtocolSection from "./protocol-section.component"

const meta: Meta = {
	title: "Sections/Protocol",
	component: ProtocolSection,
}

export default meta

const Template: Story = (args) => <ProtocolSection {...args} />

export const Default = Template.bind({})

Default.args = {}
