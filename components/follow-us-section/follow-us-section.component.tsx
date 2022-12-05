import styled from "styled-components"
import localFont from "@next/font/local"

import Image from "../image/image.component"
import Link from "next/link"

const headerFont = localFont({
	src: [
		{
			path: "../../public/fonts/mona-sans/WOFF-2/Mona-Sans-BoldWide.woff2",
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
				src: "/assets/socials/facebook-circle.svg",
				alt: "facebook",
			},
		},
		{
			href: "#",
			icon: {
				src: "/assets/socials/instagram-circle.svg",
				alt: "instagram",
			},
		},
		{
			href: "#",
			icon: {
				src: "/assets/socials/youtube-circle.svg",
				alt: "youtube",
			},
		},
		{
			href: "#",
			icon: {
				src: "/assets/socials/twitter-circle.svg",
				alt: "twitter",
			},
		},
	]

	return (
		<Section>
			<H2 className={headerFont.className}>
				Follow us.
				<br /> From anywhere.
			</H2>

			<P>
				Check our social profiles and follow new content and additional
				materials on regular basis.
			</P>

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
		</Section>
	)
}

export default FollowUsSection

const Section = styled.section`
	margin: 10rem 0;
`

const H2 = styled.h2`
	font-size: 5.2rem;
	line-height: 108.5%;

	text-align: center;
	letter-spacing: 0.005em;
	text-transform: capitalize;

	color: #9cddff;

	margin-bottom: 4.8rem;
`

const P = styled.p`
	font-family: "Poppins";
	font-style: normal;
	font-weight: 400;
	font-size: 1.8rem;
	line-height: 155.6%;

	color: #ffffff;
	text-align: center;

	opacity: 0.8;

	margin-bottom: 4.8rem;
`

const SocialsDirectory = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 1.4rem;
`

const SocialFigure = styled.figure``
