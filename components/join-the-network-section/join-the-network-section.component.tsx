import styled from "styled-components"
import localFont from "@next/font/local"

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
			path: "../../public/fonts/mona-sans/WOFF-2/Mona-Sans-Black.woff2",
			weight: "900",
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
					<IluFigure>
						<Image
							src="/assets/join-the-netwrok-section/ilu-left.png"
							alt="list actions"
							width={"100%"}
							height={"100%"}
						/>
					</IluFigure>
					<IconFigure>
						<Image
							src="/assets/join-the-netwrok-section/list-actions.svg"
							alt="list actions"
							width={61}
							height={61}
						/>
					</IconFigure>
					<H3 className={articleHFont.className}>
						Explore
						<br /> Hydra<sup>DX</sup> docs
					</H3>
					<P>
						Learn more about Hydra<sup>DX</sup> Protocol & join the fun!
					</P>
					<Button>explore</Button>
				</Article>
				<Article>
					<IluFigure>
						<Image
							src="/assets/join-the-netwrok-section/ilu-right.png"
							alt="list actions"
							width={"100%"}
							height={"100%"}
						/>
					</IluFigure>
					<IconFigure>
						<Image
							src="/assets/join-the-netwrok-section/discord.svg"
							alt="discord"
							width={52}
							height={52}
						/>
					</IconFigure>
					<H3 className={articleHFont.className}>
						Join
						<br /> discord community
					</H3>
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
	/* border: 1px solid green; */
	grid-gap: 4.7rem;
`

const H3 = styled.h3`
	font-size: 4.2rem;
	line-height: 120%;

	letter-spacing: 0.005em;
	text-transform: capitalize;

	margin-bottom: 2.9rem;
	/* color: #000000; */
`

const P = styled.p`
	font-family: "Chakra Petch";
	font-style: normal;
	font-weight: 500;
	font-size: 2rem;
	line-height: 150%;

	letter-spacing: 0.005em;
	margin-bottom: 8.3rem;

	/* color: #ffffff; */
`

const IluFigure = styled.figure`
	position: absolute;
	top: 0;
	right: 0;
	z-index: -1;
`

const Button = styled.button`
	background: transparent;
	display: block;

	border: 1px solid #ffffff;
	border-radius: 0.4rem;
	padding: 1.234rem 3.29rem;
	width: 100%;
	text-align: start;
	font-family: "Chakra Petch";
	font-style: normal;
	font-weight: 700;
	font-size: 1.43726rem;
	line-height: 150%;

	letter-spacing: 0.105em;
	text-transform: uppercase;

	color: #ffffff;
`

const Article = styled.article`
	overflow: hidden;
	padding: 5.5rem;
	position: relative;
	z-index: 1;

	&:nth-of-type(1) {
		margin-top: 7.2rem;
		background: linear-gradient(
			180deg,
			rgba(61, 88, 104, 0) 19.75%,
			rgba(133, 209, 255, 0.592) 100%
		);
		filter: drop-shadow(0px 47px 200px rgba(41, 172, 246, 0.18));
		border-radius: 4px;

		${H3} {
			color: #000;
		}

		${P} {
			color: #000;
		}

		${IluFigure} {
			top: 5rem;
			right: -0.5rem;
			width: 50%;
		}

		${Button} {
			max-width: 26.2rem;
		}

		&:before {
			content: "";
			position: absolute;
			z-index: -1;
			top: 1px;
			left: 1px;
			right: 1px;
			bottom: 1px;
			border-radius: 4px;

			background: linear-gradient(180deg, #85d1ff 58.16%, #040713 100%);
		}
	}
	&:nth-of-type(2) {
		filter: drop-shadow(-7px 7px 0px rgba(7, 11, 31, 0.13));
		background: linear-gradient(
			180deg,
			rgba(246, 42, 125, 0) 12.41%,
			#f62a7d 100%
		);

		border-radius: 4px;
		margin-bottom: 7.2rem;

		${H3} {
			color: #ffffff;
		}

		${P} {
			color: #ffffff;
		}

		${IluFigure} {
			top: 2rem;
			/* right: -0.5rem; */
			width: 70%;
		}

		${Button} {
			max-width: 28.5rem;
		}

		&:before {
			content: "";
			position: absolute;
			z-index: -1;
			top: 1px;
			left: 1px;
			right: 1px;
			bottom: 1px;
			border-radius: 4px;

			background: linear-gradient(180deg, #f6297c 38.8%, #040713 100%);
		}
	}
`

const IconFigure = styled.figure`
	margin-bottom: 15rem;
`
