import localFont from "@next/font/local"
import styled from "styled-components"
import { HTMLMotionProps, motion } from "framer-motion"

interface IContainerProps {
	variant?: "LIGHTBLUE" | "BLUE" | "RED"
}

export interface IProps extends HTMLMotionProps<"h2">, IContainerProps {
	children: React.ReactNode | React.ReactNode[]
}

const headerFont = localFont({
	src: [
		{
			path: "../../public/fonts/neue-plak-cufonfonts/Neue-Plak-Regular.ttf",
			weight: "400",
			style: "nomrmal",
		},
	],
})

const H2 = ({ children, ...props }: IProps) => {
	return (
		<H2Styles
			{...props}
			className={`${headerFont.className} ${props.className}`}
		>
			{children}
		</H2Styles>
	)
}

export default H2

const H2Styles = styled(motion.h2)<IContainerProps>`
	text-transform: uppercase;
	font-size: 5.594rem;
	text-align: center;
	margin-bottom: 6rem;

	sup {
		background: linear-gradient(
			180deg,
			#ffffff -1.86%,
			rgba(0, 148, 255, 0) 45.19%
		);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-fill-color: transparent;

		-webkit-text-stroke: 0.3px #555;
	}

	span {
		${({ variant }) =>
			variant === "LIGHTBLUE" &&
			`background: linear-gradient(180deg, #ade0ff 0%, #85d1ff 100%);`}
		${({ variant }) =>
			variant === "BLUE" &&
			`background: linear-gradient(180deg, #70B2FF 0%, #127FFF 100%);`}
		${({ variant }) => variant === "RED" && `background-color: #FC408C;`}

		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-fill-color: transparent;
	}
`
