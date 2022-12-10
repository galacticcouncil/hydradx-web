import styled from "styled-components"
import localFont from "@next/font/local"

import Image from "../image/image.component"
import Link from "next/link"

const headerFont = localFont({
	src: [
		{
			path: "../../public/fonts/font_over/Font-Over.otf",
			weight: "700",
			style: "bold",
		},
	],
})

const FollowUsSection = () => {
	const socials = [
		{
			href: "#",
			icon: {
				src: "/assets/socials/substack-circle.svg",
				alt: "substack",
			},
		},
		{
			href: "#",
			icon: {
				src: "/assets/socials/twitter-circle.svg",
				alt: "twitter",
			},
		},
		{
			href: "#",
			icon: {
				src: "/assets/socials/discord-circle.svg",
				alt: "discord",
			},
		},
		{
			href: "#",
			icon: {
				src: "/assets/socials/github-circle.svg",
				alt: "github",
			},
		},
		{
			href: "#",
			icon: {
				src: "/assets/socials/telegram-circle.svg",
				alt: "telegram",
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
					style={{ objectFit: "cover" }}
				/>
			</IluFigure>

			<Content>
				<div className="content">
					<H2 className={headerFont.className}>
						Stay Hydrated,
						<br /> <span>not liquidated</span>
					</H2>

					{/* <P>
					Check our social profiles and follow new content and additional
					materials on regular basis.
				</P> */}

					<SocialsDirectory>
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
					</SocialsDirectory>
				</div>
			</Content>
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
`

const Section = styled.section`
	margin: 0 -2rem 0;
	position: relative;
	min-height: 40rem;
`

const Content = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

	display: flex;
	align-items: center;
	justify-content: center;

	.content {
		margin-top: 6rem;
		padding: 0 2rem;
	}
`

const H2 = styled.h2`
	font-size: 3.4rem;

	text-align: center;
	letter-spacing: 0.005em;
	text-transform: capitalize;
	color: #9cddff;

	margin-bottom: 2.4rem;
	span {
		color: rgba(246, 41, 124, 1);
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
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
	justify-content: center;
	flex-wrap: wrap;
	gap: 1.4rem;
`

const SocialFigure = styled.figure``
