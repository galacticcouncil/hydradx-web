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

import { GetStaticProps } from "next"

export const getStaticProps: GetStaticProps = async () => {
	console.log({
		NEXT_PUBLIC_FE_ENV: process.env.NEXT_PUBLIC_FE_ENV,
		BE_ENV: process.env.BE_ENV,
	})

	return {
		props: {},
	}
}

export default function Home() {
	console.log({
		NEXT_PUBLIC_FE_ENV: process.env.NEXT_PUBLIC_FE_ENV,
		BE_ENV: process.env.BE_ENV,
	})

	return (
		<>
			<Head>
				<title>HydraDX</title>
				<meta name="description" content="" />
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
