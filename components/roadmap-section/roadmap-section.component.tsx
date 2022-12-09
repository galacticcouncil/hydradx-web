import styled from "styled-components"

import H2 from "../h2/content-h2.component"

import { IRoadmapItem } from "../../types/roadmap-item.types"

const RoadmapSection = () => {
	const roadmapItems: IRoadmapItem[] = [
		{
			titleColor: "#9CDDFF",
			title: "Omnipool",
			status: "SoonTM",
			process: "25%",
			barColor:
				"linear-gradient(270deg, #9CDDFF 10.04%, rgba(55, 103, 128, 0) 97.53%)",
			icon: {
				src: "",
				alt: "",
			},
		},
		{
			titleColor: "#9CDDFF",
			title: "DAI<sup>(Wormhole)</sup>",
			status: "SoonTM",
			process: "25%",
			barColor:
				"linear-gradient(270deg, #9CDDFF 10.04%, rgba(55, 103, 128, 0) 97.53%)",
			icon: {
				src: "",
				alt: "",
			},
		},
		{
			titleColor: "#5FC7FF",
			title: "DOT",
			status: "SoonTM",
			process: "25%",
			barColor:
				"linear-gradient(270deg, #5FC7FF 10.04%, rgba(55, 103, 128, 0) 97.53%)",
			icon: {
				src: "",
				alt: "",
			},
		},
		{
			titleColor: "#2AB4FF",
			title: "Liquidity Provisioning",
			status: "SoonTM",
			process: "25%",
			barColor:
				"linear-gradient(270deg, #2AB4FF 10.04%, rgba(55, 103, 128, 0) 97.53%)",
			icon: {
				src: "",
				alt: "",
			},
		},
		{
			titleColor: "#07A8FF",
			title: "USDT<sup>(Native)</sup>",
			status: "SoonTM",
			process: "25%",
			barColor:
				"linear-gradient(270deg, #07A8FF 10.04%, rgba(55, 103, 128, 0) 97.53%)",
			icon: {
				src: "",
				alt: "",
			},
		},
		{
			titleColor: "#07A8FF",
			title: "Liquidity Mining",
			status: "SoonTM",
			process: "25%",
			barColor:
				"linear-gradient(270deg, #2A99FF 10.04%, rgba(55, 103, 128, 0) 97.53%)",
			icon: {
				src: "",
				alt: "",
			},
		},
		{
			titleColor: "#127FFF",
			title: "Stableswap Subpols",
			status: "SoonTM",
			process: "25%",
			barColor:
				"linear-gradient(270deg, #127FFF 10.04%, rgba(55, 103, 128, 0) 97.53%)",
			icon: {
				src: "",
				alt: "",
			},
		},
		{
			titleColor: "#1263FF",
			title: "USDC<sup>(Native)</sup>",
			status: "Working on it",
			process: "25%",
			barColor:
				"linear-gradient(270deg, #1263FF 10.04%, rgba(55, 103, 128, 0) 97.53%)",
			icon: {
				src: "",
				alt: "",
			},
		},
		{
			titleColor: "#1263FF",
			title: "ETH<sup>(Snowbridge)</sup>",
			status: "Working on it",
			process: "25%",
			barColor:
				"linear-gradient(270deg, #1246FF 10.04%, rgba(55, 103, 128, 0) 97.53%)",
			icon: {
				src: "",
				alt: "",
			},
		},
		{
			titleColor: "#1263FF",
			title: "Slip-based Fees",
			status: "Working on it",
			process: "25%",
			barColor:
				"linear-gradient(270deg, #033AFF 10.04%, rgba(55, 103, 128, 0) 97.53%)",
			icon: {
				src: "",
				alt: "",
			},
		},
		{
			titleColor: "#0057FF",
			title: "Fee Disribution 2.0",
			status: "Working on it",
			process: "25%",
			barColor:
				"linear-gradient(270deg, #0057FF 10.04%, rgba(55, 103, 128, 0) 97.53%)",
			icon: {
				src: "",
				alt: "",
			},
		},
		{
			titleColor: "#0047FF",
			title: "Omnipool Bond AMM",
			status: "Working on it",
			process: "25%",
			barColor:
				"linear-gradient(270deg, #0047FF 10.04%, rgba(55, 103, 128, 0) 97.53%)",
			icon: {
				src: "",
				alt: "",
			},
		},
		{
			titleColor: "#0047FF",
			title: "Order Batching",
			status: "Working on it",
			process: "25%",
			barColor:
				"linear-gradient(270deg, #0047FF 10.04%, rgba(55, 103, 128, 0) 97.53%)",
			icon: {
				src: "",
				alt: "",
			},
		},
		{
			titleColor: "#1425BB",
			title: "Liquidation Engine",
			status: "Working on it",
			process: "25%",
			barColor:
				"linear-gradient(270deg, #1425BB 10.04%, rgba(20, 37, 187, 0) 97.53%)",
			icon: {
				src: "",
				alt: "",
			},
		},
		{
			titleColor: "#1425BB",
			title: "Lending",
			status: "Working on it",
			process: "25%",
			barColor:
				"linear-gradient(270deg, #1425BB 10.04%, rgba(20, 37, 187, 0) 97.53%)",
			icon: {
				src: "",
				alt: "",
			},
		},
	]

	return (
		<Section>
			<H2 variant="BLUE">
				Hydra<sup>dx</sup> <span>roadmap</span>
			</H2>

			<Container>
				{roadmapItems.map((item, index) => (
					<div key={index}>
						<h3>{item.title}</h3>
						<h3>{item.status}</h3>
					</div>
				))}
			</Container>
		</Section>
	)
}

export default RoadmapSection

const Section = styled.section``

const Container = styled.div`
	max-width: 110rem;
	margin: 0 auto;
	padding: 4rem;

	background: linear-gradient(
		180deg,
		rgba(0, 178, 255, 0.102) 0%,
		rgba(0, 0, 0, 0) 70.45%
	);
	border-radius: 0.8rem;
`
