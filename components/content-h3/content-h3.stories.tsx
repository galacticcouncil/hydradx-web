import { Story, Meta } from "@storybook/react"

import H3, { IProps } from "./content-h3.component"

const meta: Meta = {
	title: "Components/Content H3",
	component: H3,
}

export default meta

const Template: Story<IProps> = (args) => <H3 {...args} />

export const Default = Template.bind({})

Default.args = {
	children: "Content H3",
}
