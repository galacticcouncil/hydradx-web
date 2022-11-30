import { Story, Meta } from "@storybook/react"

import HeroSection from "./hero-section.component"

const meta: Meta = {
	title: "Sections/Hero",
	component: HeroSection,
}

export default meta

const Template: Story = (args) => <HeroSection {...args} />

export const Default = Template.bind({})

Default.args = {}
