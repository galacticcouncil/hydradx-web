import { Story, Meta } from "@storybook/react"

import ResourcesArticle, { IProps } from "./resourcess-article.component"

const meta: Meta = {
	title: "Components/ResourcessArticle",
	component: ResourcesArticle,
}

export default meta

const Template: Story<IProps> = (args) => <ResourcesArticle {...args} />

export const Default = Template.bind({})

Default.args = {
	article: {
		icon: {
			src: "/assets/resourcess-section/tok-icon.svg",
			alt: "tokenomics icon",
		},
		label: "knowledge",
		heading: "hydra tokenomics",
		cta: {
			label: "open",
			href: "#",
		},
	},
}
