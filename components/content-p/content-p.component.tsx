import styled from "styled-components"
import { motion, HTMLMotionProps } from "framer-motion"

export interface IProps extends HTMLMotionProps<"p"> {
	children: React.ReactNode | React.ReactNode[]
}

const P = ({ children, ...props }: IProps) => {
	return <PStyles {...props}>{children}</PStyles>
}

export default P

const PStyles = styled(motion.p)`
	font-family: "Chakra Petch";
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 150%;

	opacity: 0.8;

	margin-bottom: 5.2rem;
`
