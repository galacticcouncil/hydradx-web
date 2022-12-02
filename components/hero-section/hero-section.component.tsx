import styled from "styled-components"
import localFont from "@next/font/local"

import { Button } from "../button/button.component"

const headerFont = localFont({
	src: [
		{
			path: "../../public/fonts/hubot-sans/WOFF-2/Hubot-Sans-BoldWide.woff2",
			weight: "900",
			style: "bold",
		},
	],
})

const HeroSection = () => {
	return (
		<Section>
			<H1 className={headerFont.className}>
				An Ocean of Liquidity
				<br /> for Polkadot
			</H1>
			<P>
				Trade abundance of assets in a single pool.
				<br /> The HydraDX Omnipool is efficient, sustainable and trustless.
			</P>

			<Button>OPEN HYDRA APP</Button>
		</Section>
	)
}

export default HeroSection

const Section = styled.section``

const H1 = styled.h1`
	font-size: 6rem;
	text-align: center;
	line-height: 120%;
	margin-bottom: 2rem;
`

const P = styled.p`
	text-align: center;
	font-family: "Chakra Petch", sans-serif;
	font-size: 2.4rem;
	line-height: 150%;
	opacity: 0.8;
`
