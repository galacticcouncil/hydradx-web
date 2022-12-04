import { Story, Meta } from "@storybook/react"

import P, { IProps } from "./content-p.component"

const meta: Meta = {
	title: "Components/Content P",
	component: P,
}

export default meta

const Template: Story<IProps> = (args) => <P {...args} />

export const Default = Template.bind({})

Default.args = {
	children: "Content P",
}
