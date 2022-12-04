import localFont from "@next/font/local"
import styled from "styled-components"
import { HTMLMotionProps, motion } from "framer-motion"

export interface IProps extends HTMLMotionProps<"h3"> {
	children: React.ReactNode | React.ReactNode[]
}

const contentHeaderFont = localFont({
	src: [
		{
			path: "../../public/fonts/hubot-sans/WOFF-2/Hubot-Sans-BoldWide.woff2",
			weight: "900",
			style: "bold",
		},
	],
})

const H3 = ({ children, ...props }: IProps) => {
	return (
		<H3Styles
			{...props}
			className={`${contentHeaderFont.className} ${props.className}`}
		>
			{children}
		</H3Styles>
	)
}

export default H3

const H3Styles = styled(motion.h3)`
	color: #ebebeb;
	font-stretch: 125;
	font-size: 38px;
	line-height: 130%;
	margin-bottom: 1.6rem;
`
