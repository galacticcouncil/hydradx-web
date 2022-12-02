import { Story, Meta } from "@storybook/react"

import Header, { IProps } from "./header.component"

const meta: Meta = {
	title: "Components/Header",
	component: Header,
}

export default meta

const Template: Story<IProps> = (args) => <Header {...args} />

export const Default = Template.bind({})

Default.args = {
	navItems: [
		{
			label: "Start",
			href: "/",
		},
		{
			label: "Socials",
			href: "/#socials",
		},
		{
			label: "Docs",
			href: "/#",
		},
		{
			label: "Tokenomics",
			href: "/#",
		},
	],
}
