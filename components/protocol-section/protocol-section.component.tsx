import styled from "styled-components"

import H2 from "../h2/content-h2.component"
import { Button } from "../button/button.component"

const ProtocolSection = () => {
	return (
		<Section>
			<H2 variant="RED">
				Hydra<sup>dx</sup> <span>protocol</span>
			</H2>

			<Article1>
				<H3>Embrace sustainable protocol design.</H3>
				<P>
					HydraDX is designed and built to last. Offering a value proposition
					for everyone: Traders, LPs and HDX hodlers.
				</P>
				<Button>Learn more</Button>
			</Article1>

			<Article2>
				<H3>Take a Glimpse Into the Future.</H3>
				<P>
					Backed by an extensive body of research. Stableswap, order matching,
					bonds and liquidation mechanisms - we are just getting started.
				</P>
				<Button>Learn more</Button>
			</Article2>

			<Article3>
				<H3>Decentralized and Community-first.</H3>
				<P>
					HydraDX is a decentralized protocol with a community-first approach.
					All decisions affecting the protocol are adopted in a democratic
					process.
				</P>
				<Button>Learn more</Button>
			</Article3>
		</Section>
	)
}

export default ProtocolSection

const Section = styled.section`
	max-width: 110rem;
	margin: 0 auto;
`

const Article1 = styled.article`
	border: 1px solid red;
`
const Article2 = styled.article`
	border: 1px solid pink;
`
const Article3 = styled.article`
	border: 1px solid purple;
`

const H3 = styled.h3``

const P = styled.p``
