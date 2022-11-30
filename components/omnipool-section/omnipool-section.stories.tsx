import { Story, Meta } from "@storybook/react"

import OmnipoolSection from "./omnipool-section.component"

const meta: Meta = {
	title: "Sections/Omnipool",
	component: OmnipoolSection,
}

export default meta

const Template: Story = (args) => <OmnipoolSection {...args} />

export const Default = Template.bind({})

Default.args = {}
