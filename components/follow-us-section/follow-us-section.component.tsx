import styled from "styled-components"
// import localFont from "@next/font/local"

import Image from "../image/image.component"
import Link from "next/link"

// const headerFont = localFont({
// 	src: [
// 		{
// 			path: "../../assets/fonts/font_over/Font-Over.otf",
// 			weight: "700",
// 			style: "bold",
// 		},
// 	],
// })

const FollowUsSection = () => {
	const socials = [
		{
			href: "https://hydradx.substack.com/",
			rel: "noopener noreferrer",
			target: "_blank",
			icon: {
				src: "/assets/socials/substack-circle.svg",
				alt: "substack",
			},
		},
		{
			href: "https://twitter.com/hydra_dx",
			rel: "noopener noreferrer",
			target: "_blank",
			icon: {
				src: "/assets/socials/twitter-circle.svg",
				alt: "twitter",
			},
		},
		{
			href: "https://discord.gg/kkmY35UxAG",
			rel: "noopener noreferrer",
			target: "_blank",
			icon: {
				src: "/assets/socials/discord-circle.svg",
				alt: "discord",
			},
		},
		{
			href: "https://t.me/hydradx",
			rel: "noopener noreferrer",
			target: "_blank",
			icon: {
				src: "/assets/socials/telegram-circle.svg",
				alt: "telegram",
			},
		},
		{
			href: "https://github.com/galacticcouncil",
			rel: "noopener noreferrer",
			target: "_blank",
			icon: {
				src: "/assets/socials/github-circle.svg",
				alt: "github",
			},
		},
		// {
		// 	href: "#",
		// 	icon: {
		// 		src: "/assets/socials/facebook-circle.svg",
		// 		alt: "facebook",
		// 	},
		// },
		// {
		// 	href: "#",
		// 	icon: {
		// 		src: "/assets/socials/instagram-circle.svg",
		// 		alt: "instagram",
		// 	},
		// },
		// {
		// 	href: "#",
		// 	icon: {
		// 		src: "/assets/socials/youtube-circle.svg",
		// 		alt: "youtube",
		// 	},
		// },
	]

	return (
		<Section>
			<IluFigure>
				<Image
					src="/assets/follow-us-section/ilu.png"
					alt="follow us ilu"
					width={"100%"}
					height={"100%"}
					style={{ objectFit: "contain", objectPosition: "bottom" }}
					// style={{ objectFit: "cover" }}
				/>
			</IluFigure>

			<Content>
				<div className="content">
					<H2>
						Stay Hydrated,
						<br /> <span>not liquidated</span>
					</H2>

					{/* <P>
					Check our social profiles and follow new content and additional
					materials on regular basis.
				</P> */}

					{/* <SocialsDirectory>
						{socials.map((social, index) => (
							<SocialFigure key={index}>
								<Link href={social.href}>
									<Image
										src={social.icon.src}
										alt={social.icon.alt}
										width={54}
										height={54}
									/>
								</Link>
							</SocialFigure>
						))}
					</SocialsDirectory> */}
				</div>
			</Content>
			<MobileIluFigure>
				<Image
					src="/assets/follow-us-section/ilu-mobile.png"
					alt="follow us ilu"
					width={"100%"}
					height={"100%"}
					style={{ objectFit: "contain" }}
					// style={{ objectFit: "cover" }}
				/>
			</MobileIluFigure>
		</Section>
	)
}

export default FollowUsSection

const IluFigure = styled.figure`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	height: 100%;
	z-index: -1;

	display: none;
	visibility: hidden;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			display: flex;
			visibility: visible;

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const MobileIluFigure = styled.figure`
	/* position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	height: 100%;
	z-index: -1; */

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			display: none;
			visibility: hidden;

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const Section = styled.section`
	margin: 0 -2rem 0;
	position: relative;
	/* min-height: 40rem; */
	/* border: 1px solid red; */

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			@media all and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
				/* min-height: 60rem; */
			}
		}
	}
`

const Content = styled.div`
	/* position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0; */

	display: flex;
	align-items: center;
	justify-content: center;

	.content {
		margin-top: 6rem;
		padding: 4rem 2rem;
	}
`

const H2 = styled.h2`
	letter-spacing: 0.005em;
	text-transform: capitalize;
	color: #9cddff;

	font-family: "FontOver";

	margin-bottom: 2.4rem;
	font-size: 3.65966rem;
	span {
		color: rgba(246, 41, 124, 1);
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			text-align: center;
			font-size: 5.2rem;
			margin-bottom: 3rem;

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

// const P = styled.p`
// 	font-family: "Poppins";
// 	font-style: normal;
// 	font-weight: 400;
// 	font-size: 1.8rem;
// 	line-height: 155.6%;

// 	color: #ffffff;
// 	text-align: center;

// 	opacity: 0.8;

// 	margin-bottom: 4.8rem;
// `

const SocialsDirectory = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1.9rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			justify-content: center;
			gap: 2.4rem;

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const SocialFigure = styled.figure`
	width: 3.8rem;
	height: 3.8rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			width: 5.4rem;
			height: 5.4rem;
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`
