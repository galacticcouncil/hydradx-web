// Utils
import { Story, Meta } from "@storybook/react"

// Components
import { Button, ButtonLink } from "./button.component"

// Types
import { IButtonProps, IButtonLinkProps } from "./button.types"

const meta: Meta = {
	title: "Components/Button",
	component: Button,
}

export default meta

const TemplateButton: Story<IButtonProps> = (args) => <Button {...args} />
const TemplateButtonLink: Story<IButtonLinkProps> = (args) => (
	<ButtonLink {...args} />
)

export const DefaultButton = TemplateButton.bind({})

export const DefaultButtonLink = TemplateButtonLink.bind({})

DefaultButton.args = {
	children: "Button",
	disabled: false,
	onClick: () => console.log("Button clicked"),
	top: "initial",
	bottom: "initial",
	left: "initial",
	right: "initial",
	width: "initial",
	rounded: false,
}

DefaultButtonLink.args = {
	children: "Button",
	href: "#",
	top: "initial",
	bottom: "initial",
	left: "initial",
	right: "initial",
	width: "initial",
	rounded: false,
	disabled: false,
	display: "flex",
}
