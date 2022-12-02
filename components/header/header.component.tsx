import styled from "styled-components"
import localFont from "@next/font/local"

import Image from "../image/image.component"
import Link from "next/link"

import { INavItem } from "../../types/nav.types"

export interface IProps {
	navItems: INavItem[]
}

const navFont = localFont({
	src: [
		{
			path: "../../public/fonts/blender-pro/BlenderPro-Book.woff2",
			weight: "500",
			style: "normal",
		},
	],
})

const Header = ({ navItems }: IProps) => {
	return (
		<HeaderContainer>
			<Container>
				<LogoFigure>
					<Image
						src="/assets/logo-v2.svg"
						alt="HydraDX"
						width={"100%"}
						height={"100%"}
						style={{ objectFit: "contain" }}
					/>
				</LogoFigure>

				<Nav className={navFont.className}>
					<Ul>
						{navItems.map((item, index) => (
							<Li key={index}>
								<Link {...item}>
									{item.label}{" "}
									{item.hasIcon && (
										<span>
											<Image
												src="/assets/icons/link-icon.svg"
												alt="link icon"
											/>
										</span>
									)}
								</Link>
							</Li>
						))}
					</Ul>
				</Nav>

				<CtaContainer>{/* cta */}</CtaContainer>
			</Container>
		</HeaderContainer>
	)
}

export default Header

const HeaderContainer = styled.header`
	height: 6.4rem;
	width: 100%;
	padding: 0 2rem;
	position: fixed;
	top: 0;
	left: 0;
	background-color: ${({ theme }) => theme.header.background};
`

const Container = styled.div`
	max-width: 110rem;
	margin: 0 auto;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const LogoFigure = styled.figure`
	display: flex;
	align-items: center;
	justify-content: center;
`

const Nav = styled.nav``

const Ul = styled.ul`
	display: flex;
	align-items: center;
	gap: 4.1rem;
`

const Li = styled.ul`
	font-size: 1.6rem;

	a {
		display: flex;
		align-items: center;
		gap: 0.8rem;
		color: ${({ theme }) => theme.header.navItem.color};
		transition: color 0.2s ease-out;

		&:hover {
			color: ${({ theme }) => theme.header.navItem.hoverColor};
		}
	}
`

const CtaContainer = styled.div``
