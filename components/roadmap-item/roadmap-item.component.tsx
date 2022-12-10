import styled, { css } from "styled-components"
import { motion, Variants } from "framer-motion"
import localFont from "@next/font/local"

import Image from "../image/image.component"

import { IRoadmapItem } from "../../types/roadmap-item.types"
export interface IProps {
	item: IRoadmapItem
}

const titleFont = localFont({
	src: [
		{
			path: "../../public/fonts/mona-sans/WOFF-2/Mona-Sans-MediumWide.woff2",
			weight: "600",
			style: "medium",
		},
	],
})

const RoadmapItem = ({ item }: IProps) => {
	return (
		<Item>
			<ProgressContainer>
				<ProgressBar width={item.process} color={item.barColor}></ProgressBar>
				<ProgressBarFigure>
					<Image
						src={item.icon.src}
						alt={item.icon.alt}
						width={"100%"}
						height={"100%"}
						style={{ objectFit: "contain" }}
					/>
				</ProgressBarFigure>
			</ProgressContainer>
			<Content>
				<Title
					className={titleFont.className}
					color={item.titleColor}
					dangerouslySetInnerHTML={{ __html: item.title }}
				/>
				<P dangerouslySetInnerHTML={{ __html: item.status }} />
			</Content>
		</Item>
	)
}

export default RoadmapItem

const Item = styled(motion.div)`
	width: 100%;
	/* border: 1px solid green; */
	display: grid;
	align-items: center;
	grid-template-columns: 1fr;
	gap: 0.8rem;

	&:not(:last-child) {
		margin-bottom: 0.7rem;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			grid-template-columns: 1fr 1fr;
			gap: 2rem;
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

interface IProgressBar {
	width: string
	color: string
}

const ProgressContainer = styled(motion.div)`
	display: flex;
	align-items: center;
	/* display: grid; */
	/* grid-template-columns: 1fr auto; */
`

const ProgressBar = styled(motion.div)<IProgressBar>`
	width: ${({ width }) => width};
	/* height: 100%; */
	height: 3.308rem;
	background: ${({ color }) => color};
	/* border: 1px solid red; */
`

const ProgressBarFigure = styled(motion.figure)`
	max-height: 2.899rem;
	display: flex;
	align-items: center;
	justify-content: center;
`

interface ITitle {
	color: string
}
const Title = styled(motion.h3)<ITitle>`
	color: ${({ color }) => color};

	font-size: 2rem;
	line-height: 100%;
`

const P = styled(motion.p)`
	font-family: "Chakra Petch";
	font-style: normal;
	font-weight: 400;
	font-size: 1.4rem;
	line-height: 150%;

	color: #999ba7;
`

const Content = styled(motion.div)`
	margin-left: 2.3rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			margin-left: unset;
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`
