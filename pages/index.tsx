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
				<title>HydraDX</title>
				<meta name="description" content="" />
			</Head>

			<HeroSection />
			<OmnipoolSection />
			<ProtocolSection />
			{/*
			<RoadmapSection />
			<JoinTheNetworkSection />
			<ResourcessSection />
			<FollowUsSection /> */}
		</>
	)
}

Home.getLayout = function getLayout(page: ReactElement) {
	return <PageLayout>{page}</PageLayout>
}
