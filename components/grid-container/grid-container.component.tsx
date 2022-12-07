import styled from "styled-components"
import { motion, HTMLMotionProps } from "framer-motion"

export interface IProps extends HTMLMotionProps<"div"> {
	children: React.ReactNode | React.ReactNode[]
}

const GridContainer = ({ children, ...props }: IProps) => {
	return <Container {...props}>{children}</Container>
}

export default GridContainer

const Container = styled(motion.div)`
	max-width: 110rem;
	margin: 0 auto;

	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 5rem;

	/* border: 1px solid green; */
	margin-bottom: 9.2rem;
`
