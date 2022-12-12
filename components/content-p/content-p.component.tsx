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
	font-size: 1.6rem;
	line-height: 150%;

	opacity: 0.8;

	margin-bottom: 3rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			font-size: 1.8rem;
			margin-bottom: 5.2rem;
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`
