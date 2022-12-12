import styled from "styled-components"
import localFont from "@next/font/local"
import { AnimatePresence, motion, Variants } from "framer-motion"

import Image from "../image/image.component"
import Link from "next/link"
import HamMenuButton from "../ham-menu-button/ham-menu-button.component"
import { Button } from "../button/button.component"

import { useBoolean } from "usehooks-ts"
import { useEffect } from "react"

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
	const { value: isOpen, toggle: toggleMenu } = useBoolean(false)
	const { value: showCta, setValue: setShowCta } = useBoolean(false)

	const ctaContainerVariants: Variants = {
		hidden: {
			opacity: 0,
			y: -20,
			transition: {
				ease: [0.12, 0.23, 0.06, 1.09],
				duration: 0.5,
			},
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				ease: [0.12, 0.23, 0.06, 1.09],
				duration: 0.5,
			},
		},
	}

	useEffect(() => {
		window.onscroll = () => {
			let currentScrollPos = window.pageYOffset

			if (currentScrollPos > 600) {
				setShowCta(true)
			} else {
				if (currentScrollPos <= 0) return
				setShowCta(false)
			}
		}
	})

	return (
		<HeaderContainer>
			<Container>
				<LogoFigure>
					<Image
						className="desktop"
						src="/assets/logo-v2.svg"
						alt="HydraDX"
						width={"100%"}
						height={"100%"}
						style={{ objectFit: "contain" }}
					/>
					<Image
						className="mobile"
						src="/assets/logo-mobile.svg"
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

				<CtaContainer>
					<AnimatePresence>
						{showCta && (
							<motion.div
								variants={ctaContainerVariants}
								initial={"hidden"}
								animate={"visible"}
								exit={"hidden"}
							>
								<Button className="btn">ENTER OMNIPOOL</Button>
							</motion.div>
						)}
					</AnimatePresence>
				</CtaContainer>
				<HamMenuButton
					className="ham"
					onClick={() => toggleMenu()}
					isOpen={isOpen}
				/>
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
	z-index: 9999;
	backdrop-filter: blur(2.7rem);
	border-bottom: 0.5px solid rgba(255, 255, 255, 0.2);

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			.ham {
				display: none;
				visibility: hidden;
			}

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const Container = styled.div`
	max-width: 163.4rem;
	margin: 0 auto;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const LogoFigure = styled.figure`
	display: flex;
	align-items: center;
	justify-content: start;

	.desktop {
		display: none;
		visibility: hidden;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			.desktop {
				display: flex;
				visibility: visible;
			}
			.mobile {
				display: none;
				visibility: hidden;
			}

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const Nav = styled.nav`
	display: none;
	visibility: hidden;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			display: block;
			visibility: visible;

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

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

const CtaContainer = styled.div`
	display: none;
	visibility: hidden;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			display: block;
			visibility: visible;
			width: 21.45rem;

			.btn {
				padding: 0.8rem 3.6rem;
				font-size: 1.4rem;
			}

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`
