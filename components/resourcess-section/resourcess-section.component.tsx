import styled from "styled-components"
import localFont from "@next/font/local"

import { Button } from "../button/button.component"
import ResourcesArticle from "../resourcess-article/resourcess-article.component"

import { IArticle } from "../../types/resources.types"

const headerFont = localFont({
	src: [
		{
			path: "../../public/fonts/mona-sans/WOFF-2/Mona-Sans-BoldWide.woff2",
			weight: "700",
			style: "bold",
		},
	],
})

const ResourcessSection = () => {
	const articles = [
		{
			icon: {
				src: "/assets/resourcess-section/tok-icon.svg",
				alt: "tokenomics icon",
			},
			label: "knowledge",
			heading: "hydra tokenomics",
			cta: {
				label: "open",
			},
		},
		{
			icon: {
				src: "/assets/resourcess-section/press-kit-icon.svg",
				alt: "press kit icon",
			},
			label: "resourcess",
			heading: "press kit resourcess",
			cta: {
				label: "open",
			},
		},
		{
			icon: {
				src: "/assets/resourcess-section/github-icon.svg",
				alt: "github icon",
			},
			label: "chain",
			heading: "Hydra Github",
			cta: {
				label: "open",
			},
		},
	]

	return (
		<Section>
			<H2 className={headerFont.className}>
				Dive into Hydra <br /> Resourcess
			</H2>

			<Flex>
				{articles.map((article, index) => (
					<ResourcesArticle key={index} article={article} />
				))}
			</Flex>
		</Section>
	)
}

export default ResourcessSection

const Section = styled.section`
	max-width: 110rem;
	margin: 0 auto;
`

const H2 = styled.h2`
	font-size: 5.2rem;
	line-height: 130%;

	text-align: center;
	letter-spacing: 0.02em;

	color: #ffffff;
`

const Flex = styled.div`
	border: 1px solid green;
	display: flex;
	justify-content: center;
	gap: 4.5rem;
`

const Article = styled.article`
	border: 1px solid red;
`

const P = styled.p``

const H3 = styled.h3``
