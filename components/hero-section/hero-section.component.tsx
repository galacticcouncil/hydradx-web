import styled from "styled-components"
import localFont from "@next/font/local"

import { Button } from "../button/button.component"
import Image from "../image/image.component"
import Link from "next/link"

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
	const socials = [
		{
			href: "#",
			icon: {
				src: "/assets/socials/discord.svg",
				alt: "discord",
			},
		},
		{
			href: "#",
			icon: {
				src: "/assets/socials/twitter.svg",
				alt: "twitter",
			},
		},
		{
			href: "#",
			icon: {
				src: "/assets/socials/telegram.svg",
				alt: "telegram",
			},
		},
		{
			href: "#",
			icon: {
				src: "/assets/socials/substack.svg",
				alt: "substack",
			},
		},
		{
			href: "#",
			icon: {
				src: "/assets/socials/github.svg",
				alt: "github",
			},
		},
		{
			href: "#",
			icon: {
				src: "/assets/socials/reddit.svg",
				alt: "reddit",
			},
		},
	]

	return (
		<Section>
			<H1 className={headerFont.className}>
				An Ocean of
				<br /> Liquidity for Polkadot
			</H1>
			<P>
				Trade abundance of assets in a single pool.
				<br /> The HydraDX Omnipool is efficient,
				<br /> sustainable and trustless.
			</P>

			<Button left="auto" right="auto">
				ENTER OMNIPOOL
			</Button>

			<SocialDirectory>
				{socials.map((social, index) => (
					<Link href={social.href} key={index}>
						<SocialFigure>
							<Image
								src={social.icon.src}
								alt={social.icon.alt}
								width={30}
								height={30}
							/>
						</SocialFigure>
					</Link>
				))}
			</SocialDirectory>

			<IluFigure>
				<Image
					src={"/assets/hero-section/destop-app-ilu.png"}
					alt={"desktop app ilu"}
					width="100%"
					height="100%"
				/>
			</IluFigure>
		</Section>
	)
}

export default HeroSection

const Section = styled.section`
	padding-top: 6rem;
`

const H1 = styled.h1`
	font-size: 6rem;
	text-align: center;
	line-height: 120%;
	margin-bottom: 2rem;

	background: linear-gradient(233.13deg, #ffffff 28.57%, #9bbdff 101.94%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	text-fill-color: transparent;
`

const P = styled.p`
	text-align: center;
	font-family: "Chakra Petch", sans-serif;
	font-size: 2.8rem;
	line-height: 150%;

	text-align: center;
	color: #ffffff;
	opacity: 0.8;
	margin-bottom: 4.8rem;
`

const SocialDirectory = styled.div`
	display: flex;
	justify-content: center;
	gap: 3.877rem;
	flex-wrap: wrap;
	margin-top: 4.4rem;
	margin-bottom: 5.9rem;
`

const SocialFigure = styled.figure``

const IluFigure = styled.figure`
	max-width: 102.9rem;
	margin: 0 auto;
`
