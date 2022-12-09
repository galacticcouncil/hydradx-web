import styled from "styled-components"

import H2 from "../h2/content-h2.component"

const RoadmapSection = () => {
	return (
		<Section>
			<H2 variant="BLUE">
				Hydra<sup>dx</sup> <span>roadmap</span>
			</H2>

			<Container>as</Container>
		</Section>
	)
}

export default RoadmapSection

const Section = styled.section``

const Container = styled.div`
	max-width: 110rem;
	margin: 0 auto;

	background: linear-gradient(
		180deg,
		rgba(0, 178, 255, 0.102) 0%,
		rgba(0, 0, 0, 0) 70.45%
	);
	border-radius: 0.8rem;
`
