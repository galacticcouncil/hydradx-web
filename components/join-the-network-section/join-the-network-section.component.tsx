import styled from "styled-components"
import localFont from "@next/font/local"

import { Button } from "../button/button.component"
import Image from "../image/image.component"

const headerFont = localFont({
	src: [
		{
			path: "../../public/fonts/mona-sans/WOFF-2/Mona-Sans-BoldWide.woff2",
			weight: "700",
			style: "bold",
		},
	],
})

const articleHFont = localFont({
	src: [
		{
			path: "../../public/fonts/mona-sans/WOFF-2/Mona-Sans-RegularWide.woff2",
			weight: "600",
			style: "normal",
		},
	],
})

const JoinTheNetworkSection = () => {
	return (
		<Section>
			<H2 className={headerFont.className}>Join the network.</H2>

			<Grid>
				<Article>
					<IconFigure>
						<Image
							src="/assets/join-the-netwrok-section/list-actions.svg"
							alt="list actions"
							width={61}
							height={61}
						/>
					</IconFigure>
					<H3 className={articleHFont.className}>
						Explore Hydra<sup>DX</sup> docs
					</H3>
					<P>
						Learn more about Hydra<sup>DX</sup> Protocol & join the fun!
					</P>
					<Button>explore</Button>
				</Article>
				<Article>
					<IconFigure>
						<Image
							src="/assets/join-the-netwrok-section/discord.svg"
							alt="discord"
							width={52}
							height={52}
						/>
					</IconFigure>
					<H3 className={articleHFont.className}>Join discord community</H3>
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
	margin: 0 auto 12.396rem;
`

const H2 = styled.h2`
	font-size: 5.2rem;
	line-height: 110%;

	letter-spacing: 0.02em;
	margin-bottom: 1.235rem;

	color: #ffffff;
`

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	border: 1px solid green;
	grid-gap: 4.7rem;
`

const H3 = styled.h3`
	font-size: 4.2rem;
	line-height: 120%;

	letter-spacing: 0.005em;
	text-transform: capitalize;

	/* color: #000000; */
`

const P = styled.p`
	font-family: "Chakra Petch";
	font-style: normal;
	font-weight: 500;
	font-size: 2rem;
	line-height: 150%;

	letter-spacing: 0.005em;

	/* color: #ffffff; */
`

const Article = styled.article`
	padding: 5.5rem;

	&:nth-of-type(1) {
		margin-top: 7.2rem;
		background: linear-gradient(
			180deg,
			#85d1ff 58.16%,
			rgba(0, 115, 199, 0) 100%
		);
		filter: drop-shadow(0px 47px 200px rgba(41, 172, 246, 0.18));
		border-radius: 4px;

		${H3} {
			color: #000;
		}

		${P} {
			color: #000;
		}
	}
	&:nth-of-type(2) {
		background: linear-gradient(180deg, #f6297c 38.8%, rgba(5, 11, 26, 0) 100%);
		filter: drop-shadow(-7px 7px 0px rgba(7, 11, 31, 0.13));
		border-radius: 4px;
		margin-bottom: 7.2rem;

		${H3} {
			color: #ffffff;
		}

		${P} {
			color: #ffffff;
		}
	}
`

const IconFigure = styled.figure`
	margin-bottom: 15rem;
`
