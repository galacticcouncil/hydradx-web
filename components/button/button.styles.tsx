// Utils
import { motion } from "framer-motion"
import styled, { css } from "styled-components"

// Types
import { IStyledProps } from "./button.types"

const PrimaryButtonStyles = css<IStyledProps>`
	cursor: pointer;

	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;

	/* text-transform: uppercase; */
	font-family: "Chakra Petch", sans-serif;
	line-height: 1;
	color: ${({ theme }) => theme.button.default.color};

	width: ${({ width }) => (width ? width : "unset")};

	outline: none;
	border-radius: ${({ rounded }) => (rounded ? "999rem" : ".4rem")};

	margin-top: ${({ top }) => (top ? top : "initial")};
	margin-right: ${({ right }) => (right ? right : "initial")};
	margin-left: ${({ left }) => (left ? left : "initial")};
	margin-bottom: ${({ bottom }) => (bottom ? bottom : "initial")};
	padding: 1.4rem 4rem;

	/* transition: all 0.3s ease-in; */
	background-color: ${({ theme }) => theme.button.default.background};
	box-shadow: ${({ theme }) => theme.button.default.boxShaddow};

	font-weight: 600;
	font-size: 1.6rem;
	line-height: 2.2rem;

	&:focus {
		outline: none;
	}

	&:hover {
	}

	&:active {
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		}
	}
`

const disabledStyles = css<IStyledProps>`
	cursor: not-allowed;
	opacity: 0.5;
`

export const ButtonContainer = styled(motion.button)<IStyledProps>`
	${PrimaryButtonStyles}

	${({ disabled }) => disabled && disabledStyles};
	&:disabled {
		${disabledStyles}
	}
`

export const AContainer = styled(motion.div)<IStyledProps>`
	a {
		${PrimaryButtonStyles}
		display: ${({ display }) => display || "flex"};

		${({ disabled }) => disabled && disabledStyles};
	}
`
