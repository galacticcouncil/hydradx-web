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

const JoinTheNetworkSection = () => {
	return (
		<Section>
			<H2 className={headerFont.className}>Join the network.</H2>

			<Grid>
				<Article>
					<H3>Explore Hydra docs</H3>
					<P>Learn more about Hydra Protocol & join the fun!</P>
					<Button>explore</Button>
				</Article>
				<Article>
					<H3>Join discord community</H3>
					<P>Innovative control panel for all your spendings is here.</P>
					<Button>JOIN DISCORD</Button>
				</Article>
			</Grid>
		</Section>
	)
}

export default JoinTheNetworkSection

const Section = styled.section`
	max-width: 110rem;
	margin: 0 auto;
`

const H2 = styled.h2`
	font-size: 5.2rem;
	line-height: 110%;

	letter-spacing: 0.02em;

	color: #ffffff;
`

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	border: 1px solid green;
`

const Article = styled.article`
	&:nth-of-type(1) {
		border: 1px solid red;
	}
	&:nth-of-type(2) {
		border: 1px solid blue;
	}
`

const H3 = styled.h3``

const P = styled.p``
