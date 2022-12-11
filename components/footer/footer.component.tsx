import styled from "styled-components"
import localFont from "@next/font/local"

import Image from "../image/image.component"
import Link from "next/link"

const headerFont = localFont({
	src: [
		{
			path: "../../public/fonts/hubot-sans/WOFF-2/Hubot-Sans-MediumWide.woff2",
			weight: "500",
			style: "normal",
		},
	],
})

const Footer = () => {
	const aboutItems = [
		{
			label: "About us",
			href: "#",
		},
		{
			label: "Terms",
			href: "#",
		},
		{
			label: "FAQ",
			href: "#",
		},
		{
			label: "Contact us",
			href: "#",
		},
	]

	const socialItems = [
		{
			label: "Privacy",
			href: "#",
		},
		{
			label: "Support",
			href: "#",
		},
		{
			label: "Downloads",
			href: "#",
		},
	]

	const col3 = [
		{
			label: "Press Kit",
			href: "#",
		},
	]

	return (
		<FooterContainer>
			<Container>
				<LogoContainer>
					<LogoFigure>
						<Image
							src="/assets/logo-v2.svg"
							alt="HydraDX"
							width={"100%"}
							height={"100%"}
							style={{ objectFit: "contain" }}
						/>
					</LogoFigure>
					<PContainer>
						<p>Secured by</p>
						<figure>
							<Image
								src={"/assets/hero-section/polkadot-v2.svg"}
								alt={"polkadot logo"}
								width={"100%"}
								height={"100%"}
							/>
						</figure>
					</PContainer>
				</LogoContainer>

				<Nav>
					<Ul>
						<Li>
							<h3 className={headerFont.className}>About</h3>
						</Li>
						{aboutItems.map((item, index) => (
							<Li key={index}>
								<Link href={item.href}>{item.label}</Link>
							</Li>
						))}
					</Ul>
					<Ul>
						<Li>
							<h3 className={headerFont.className}>Find us on</h3>
						</Li>

						{socialItems.map((item, index) => (
							<Li key={index}>
								<Link href={item.href}>{item.label}</Link>
							</Li>
						))}
					</Ul>
				</Nav>
			</Container>
		</FooterContainer>
	)
}

export default Footer

const FooterContainer = styled.footer`
	border-top: 0.5px solid rgba(255, 255, 255, 0.2);
	margin: 0 -2rem 5rem;
	padding: 0 2rem;
`

const Container = styled.div`
	max-width: 110rem;
	margin: 8.1rem auto;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 4rem;
	/* border: 1px solid red; */
`

const LogoContainer = styled.div`
	p {
		font-family: "Poppins";
		font-style: normal;
		font-weight: 400;
		font-size: 1.4rem;
		line-height: 155.6%;

		color: #ffffff;

		opacity: 0.8;
	}
`

const LogoFigure = styled.figure`
	display: flex;
	align-items: center;
	align-self: flex-start;
	justify-content: center;
	/* border: 1px solid green; */
	margin-bottom: 1.5rem;
	max-width: 17.9rem;
`

const Nav = styled.div`
	display: flex;
	flex-wrap: wrap;

	gap: 9.2rem;
`

const PContainer = styled.div`
	display: none;
	visibility: hidden;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			visibility: visible;
			/* margin-top: 8.6rem; */
			display: flex;
			/* justify-content: center; */
			/* align-items: center; */
			gap: 0.83rem;

			font-family: "Chakra Petch";
			font-style: normal;
			font-weight: 500;
			font-size: 1.44553rem;
			line-height: 150%;

			color: #fff3f3;

			figure {
				display: flex;
				justify-content: center;
				align-items: center;
			}

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const Ul = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`

const Li = styled.li`
	a {
		font-family: "Poppins";
		font-style: normal;
		font-weight: 500;
		font-size: 1.2rem;
		line-height: 2.4rem;

		color: #ffffff;
	}

	h3 {
		font-size: 1.5rem;
		line-height: 130%;

		display: flex;
		align-items: center;

		color: #676c80;
		margin-bottom: 1.5rem;
	}
`
