import styled from "styled-components"

import Image from "../image/image.component"
import Link from "next/link"

const Footer = () => {
	const col1 = [
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

	const col2 = [
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
					{/* <p>© 2022 HydraDX. All rights reserved.</p> */}
				</LogoContainer>

				<Nav>
					<Ul>
						{col1.map((item, index) => (
							<Li key={index}>
								<Link href={item.href}>{item.label}</Link>
							</Li>
						))}
					</Ul>
					<Ul>
						{col2.map((item, index) => (
							<Li key={index}>
								<Link href={item.href}>{item.label}</Link>
							</Li>
						))}
					</Ul>
					<Ul>
						{col3.map((item, index) => (
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
	margin: 5rem -2rem;
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
`
