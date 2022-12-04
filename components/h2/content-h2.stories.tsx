import { Story, Meta } from "@storybook/react"

import H2, { IProps } from "./content-h2.component"

const meta: Meta = {
	title: "Components/H2",
	component: H2,
	argTypes: {
		variant: {
			control: {
				type: "select",
				options: ["RED", "BLUE", "LIGHTBLUE"],
			},
		},
	},
}

export default meta

const Template: Story<IProps> = (args) => <H2 {...args} />

export const Blue = Template.bind({})

export const Red = Template.bind({})

export const Lightblue = Template.bind({})

Blue.args = {
	variant: "BLUE",
}

Red.args = {
	variant: "RED",
}

Lightblue.args = {
	variant: "LIGHTBLUE",
}
