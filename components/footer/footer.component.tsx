import styled, { css } from "styled-components"
import localFont from "@next/font/local"
import { AnimatePresence, motion } from "framer-motion"

import { GoPlus } from "react-icons/go"
import Image from "../image/image.component"
import Link from "next/link"

const headerFont = localFont({
	src: [
		{
			path: "../../assets/fonts/hubot-sans/WOFF-2/Hubot-Sans-MediumWide.woff2",
			weight: "500",
			style: "normal",
		},
	],
})

const Footer = () => {
	const aboutItems = [
		{
			label: "Documentation",
			href: "https://docs.hydradx.io/",
		},
		{
			label: "Tokenomics",
			href: "https://docs.hydradx.io/tokenomics",
		},
		{
			label: "Press Kit",
			href: "https://github.com/galacticcouncil/HydraDX-assets/tree/main/images",
		},
	]

	const socialItems = [
		{
			label: "Github",
			href: "https://github.com/galacticcouncil",
		},
		{
			label: "Discord",
			href: "https://discord.gg/kkmY35UxAG",
		},
		{
			label: "Twitter",
			href: "https://twitter.com/hydra_dx",
		},
		{
			label: "Telegram",
			href: "https://t.me/hydradx",
		},
		{
			label: "Substack",
			href: "https://hydradx.substack.com/",
		},
		{
			label: "Reddit",
			href: "https://www.reddit.com/r/hdx/",
		},
	]

	const MOBILE_NAV_ITEMS = [
		{
			label: "Docs",
			href: "/",
		},
		{
			label: "Tokenomics",
			href: "/",
		},
		{
			label: "Github",
			href: "/",
			// rel: "noopener noreferrer",
			// target: "_blank",
		},
		{
			label: "Newsletter",
			rel: "noopener noreferrer",
			target: "_blank",
			href: "/",
		},
		{
			label: "Blog",
			// rel: "noopener noreferrer",
			// target: "_blank",
			href: "/",
		},
	]

	return (
		<FooterContainer>
			<MobileMenuContainer
				initial={{
					opacity: 0,
					y: -200,
				}}
				animate={{
					opacity: 1,
					y: 0,
				}}
				exit={{
					opacity: 0,
					y: -200,
				}}
				transition={{
					type: "spring",
					mass: 1,
					stiffness: 100,
					damping: 15,
				}}
			>
				<MobileNav>
					<MobileNavList>
						{MOBILE_NAV_ITEMS.map((item, index) => (
							<MobileNavItem key={index}>
								{item.href && (
									<Link rel={item.rel} target={item.target} href={item.href}>
										{item.label}
									</Link>
								)}
								{/* {item.list && (
									<MobileDropdownButton
										isOpen={false}
										// isOpen={item.isOpen}
										// onClick={() => item.toggle()}
									>
										<span>{item.label}</span>
										<IconSpan
											isOpen={false}
											// isOpen={item.isOpen}
											// animate={
											// 	item.isOpen ? { rotate: "-45deg" } : { rotate: 0 }
											// }
											transition={{
												type: "spring",
												mass: 1,
												stiffness: 256,
												damping: 24,
											}}
										>
											<GoPlus />
										</IconSpan>
									</MobileDropdownButton>
								)} */}
								{/* <AnimatePresence>
									{item.list && item.isOpen && (
										<MobileDropdownMenu
											initial={{ opacity: 0, height: 0 }}
											animate={{ opacity: 1, height: "auto" }}
											exit={{ opacity: 0, height: 0 }}
											transition={{
												type: "spring",
												mass: 1,
												stiffness: 256,
												damping: 24,
											}}
										>
											<MobileDropdownList>
												{item.list.map((listItem, index) => (
													<MobileDropdownMenuItem key={index}>
														<Link href={listItem.href} passHref>
															<LabelA rel={item.rel} target={item.target}>
																<LabelSpan>{listItem.label}</LabelSpan>
															</LabelA>
														</Link>
													</MobileDropdownMenuItem>
												))}
											</MobileDropdownList>
										</MobileDropdownMenu>
									)}
								</AnimatePresence> */}
							</MobileNavItem>
						))}
					</MobileNavList>
				</MobileNav>
			</MobileMenuContainer>

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
	margin: 0 auto;

	p {
		font-family: "Poppins";
		font-style: normal;
		font-weight: 400;
		font-size: 1.4rem;
		line-height: 155.6%;
		color: #ffffff;

		opacity: 0.8;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			margin: unset;

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const LogoFigure = styled.figure`
	display: flex;
	align-items: center;
	align-self: flex-start;
	justify-content: center;
	/* border: 1px solid green; */
	margin-bottom: 1.5rem;
	width: 100%;
	max-width: 17.9rem;
`

const Nav = styled.div`
	display: none;
	visibility: hidden;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			display: flex;
			visibility: visible;
			flex-wrap: wrap;

			gap: 9.2rem;
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const PContainer = styled.div`
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

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
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

const navLinksStyles = css`
	cursor: pointer;
	font-family: "Chakra Petch";
	font-style: normal;
	font-weight: 500;
	font-size: 1.6rem;
	color: #fff;
	transition: all 0.3s ease-in;

	&:hover {
		color: #ff99c2;
	}
`

// const LabelA = styled.a`
// 	position: relative;

// 	gap: 0.5rem;
// 	font-weight: 400;
// 	font-size: 1.3rem;
// 	color: #fff;

// 	transition: all 0.3s ease-in;

// 	&:hover {
// 		color: #ff99c2;
// 	}

// 	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
// 		font-size: 0.78rem;
// 		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
// 			font-size: 1.3rem;
// 		}
// 	}
// `

// const LabelSpan = styled.span`
// 	position: relative;
// 	transition: all 0.3s ease-out;
// `

const MobileMenuContainer = styled(motion.div)`
	/* position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 99; */

	width: 100%;
	/* height: 100vh; */

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			display: none;
			visibility: hidden;
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const MobileNav = styled.nav`
	margin-top: 6.4rem;
	padding: 0 0 2rem;

	height: 100%;
	overflow-y: auto;
`

const MobileNavList = styled.ul``

const MobileNavItem = styled.li`
	a {
		${navLinksStyles};

		display: block;
		padding: 2rem 0;
	}

	&:not(:last-child) {
		border-bottom: 0.461563px solid rgba(76, 243, 168, 0.12);
	}
`

// const MobileDropdownButton = styled.button<{ isOpen: boolean }>`
// 	${navLinksStyles};
// 	background-color: transparent;
// 	outline: none;
// 	border: none;
// 	padding: 2rem 0;

// 	width: 100%;
// 	display: flex;
// 	align-items: center;
// 	justify-content: space-between;
// 	gap: 0.5rem;

// 	span {
// 		display: flex;
// 		align-items: center;
// 		justify-content: center;
// 		color: ${({ isOpen }) => (isOpen ? "#FC408C" : "#fff")};
// 	}
// `

// const IconSpan = styled(motion.span)<{ isOpen: boolean }>`
// 	/* transition: 0.3s; */
// 	color: ${({ isOpen }) => (isOpen ? "#FC408C" : "#fff")};
// `

// const MobileDropdownMenu = styled(motion.div)`
// 	overflow: hidden;
// `

// const MobileDropdownList = styled.ul`
// 	margin: 0 1rem;
// `

// const MobileDropdownMenuItem = styled(motion.li)`
// 	/* padding: 2rem 0; */

// 	a {
// 		${navLinksStyles};

// 		display: flex;
// 		align-items: center;
// 		gap: 1.5rem;
// 		padding: 1rem 0.4rem;
// 		font-size: 1.3rem;

// 		transition: all 0.3s ease-in;
// 	}

// 	span {
// 		display: flex;
// 		align-items: center;
// 		justify-content: center;
// 	}
// 	&:last-child {
// 		margin-bottom: 2rem;
// 	}
// `
