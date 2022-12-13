import Head from "next/head"

import PageLayout from "../layouts/page/page.layout"

import { ReactElement } from "react"

import HeroSection from "../components/hero-section/hero-section.component"

import OmnipoolSection from "../components/omnipool-section/omnipool-section.component"
import ProtocolSection from "../components/protocol-section/protocol-section.component"
import RoadmapSection from "../components/roadmap-section/roadmap-section.component"
import JoinTheNetworkSection from "../components/join-the-network-section/join-the-network-section.component"
import ResourcessSection from "../components/resourcess-section/resourcess-section.component"
import FollowUsSection from "../components/follow-us-section/follow-us-section.component"

export default function Home() {
	return (
		<>
			<Head>
				{/* <!-- Primary Meta Tags --> */}
				<title>HydraDX - Polkadot&apos;s Multi-Headed Liquidity Monster</title>
				<meta
					name="title"
					content="HydraDX - Polkadot's Multi-Headed Liquidity Monster"
				/>
				<meta
					name="description"
					content="HydraDX is a next-gen DeFi protocol which is designed to bring an ocean of liquidity to Polkadot. Our tool for the job the HydraDX Omnipool - an innovative Automated Market Maker (AMM) which unlocks unparalleled efficiencies by combining all assets in a single trading pool."
				/>
				<link rel="canonical" href="https://hydradx.io/" />

				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://hydradx.io/" />
				<meta
					property="og:title"
					content="HydraDX - Polkadot's Multi-Headed Liquidity Monster"
				/>
				<meta
					property="og:description"
					content="HydraDX is a next-gen DeFi protocol which is designed to bring an ocean of liquidity to Polkadot. Our tool for the job the HydraDX Omnipool - an innovative Automated Market Maker (AMM) which unlocks unparalleled efficiencies by combining all assets in a single trading pool."
				/>
				<meta property="og:image" content="/assets/meta-image.png" />

				{/* <!-- Twitter --> */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://hydradx.io/" />
				<meta
					property="twitter:title"
					content="HydraDX - Polkadot's Multi-Headed Liquidity Monster"
				/>
				<meta
					property="twitter:description"
					content="HydraDX is a next-gen DeFi protocol which is designed to bring an ocean of liquidity to Polkadot. Our tool for the job the HydraDX Omnipool - an innovative Automated Market Maker (AMM) which unlocks unparalleled efficiencies by combining all assets in a single trading pool."
				/>
				<meta
					property="twitter:image"
					content="https://hydradx.io/assets/meta-image.png"
				/>
			</Head>

			<HeroSection />
			<OmnipoolSection />
			<ProtocolSection />
			<RoadmapSection />
			<JoinTheNetworkSection />
			<ResourcessSection />
			<FollowUsSection />
		</>
	)
}

Home.getLayout = function getLayout(page: ReactElement) {
	return <PageLayout>{page}</PageLayout>
}
