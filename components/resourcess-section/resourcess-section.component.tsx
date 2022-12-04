import styled from "styled-components"
import localFont from "@next/font/local"

import { Button } from "../button/button.component"

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
			label: "knowledge",
			heading: "hydra tokenomics",
			cta: {
				label: "open",
			},
		},
		{
			label: "resourcess",
			heading: "press kit resourcess",
			cta: {
				label: "open",
			},
		},
		{
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
					<Article key={index}>
						<P>{article.label}</P>
						<H3>{article.heading}</H3>
						<Button>{article.cta.label}</Button>
					</Article>
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
