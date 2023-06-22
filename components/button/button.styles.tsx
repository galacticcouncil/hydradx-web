// Utils
import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

// Types
import { IStyledProps } from './button.types'

const PrimaryButtonStyles = css<IStyledProps>`
  cursor: pointer;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  /* text-transform: uppercase; */
  font-family: 'Chakra Petch', sans-serif;
  line-height: 1;
  color: ${({ theme }) => theme.button.default.color};

  width: ${({ width }) => (width ? width : 'unset')};

  outline: none;
  border-radius: ${({ rounded }) => (rounded ? '999rem' : '.4rem')};

  margin-top: ${({ top }) => (top ? top : 'initial')};
  margin-right: ${({ right }) => (right ? right : 'initial')};
  margin-left: ${({ left }) => (left ? left : 'initial')};
  margin-bottom: ${({ bottom }) => (bottom ? bottom : 'initial')};
  padding: 1.4rem 3.1rem;

  /* transition: all 0.2s ease-in; */
  background-color: ${({ theme }) => theme.button.default.background};
  box-shadow: ${({ theme }) => theme.button.default.boxShaddow};

  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2.2rem;

  /* &:before {
		transition: all 0.2s ease-in;
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
		background-color: #fff;
		border-radius: ${({ rounded }) => (rounded ? '999rem' : '.4rem')};
	} */

  &:focus {
    outline: none;
  }

  &:hover {
    /* transform: translate(-0.4rem, -0.4rem); */
    /* margin: 0 0.4rem 0.4rem 0; */
    /* transform: translateZ(1); */
    /* box-shadow: 4px 4px 0px 1px #fff; */

    /* &:before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			right: -0.4rem;
			bottom: -0.4rem;
			background-color: #fff;
		} */
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

  background: rgba(246, 41, 124, 0.44);
  box-shadow: 0px 0px 0px -1px rgba(195, 145, 200, 0.3),
    0px 13px 47px -12px rgba(246, 41, 124, 0.66);
`

export const ButtonContainer = styled(motion.button)<IStyledProps>`
  ${PrimaryButtonStyles}

  ${({ disabled }) => disabled && disabledStyles};
  &:disabled {
    ${disabledStyles}
  }
`

export const AContainer = styled(motion.div)<IStyledProps>`
  position: relative;
  ${PrimaryButtonStyles}

  a {
    color: ${({ theme }) => theme.button.default.color};
    display: ${({ display }) => display || 'flex'};

    ${({ disabled }) => disabled && disabledStyles};
  }
`

export const ButtonBackground = styled(motion.div)<IStyledProps>`
  position: absolute;
  top: 0;
  left: 0;
  /* right: 0;
	bottom: 0; */
  width: 100%;
  height: 100%;
  z-index: -1;
  /* background-color: rgb(246 40 124 / 45%); */
  /* background-color: rgb(246 40 124 / 45%); */
  background: #4b2e4a;
  border-radius: ${({ rounded }) => (rounded ? '999rem' : '.4rem')};
`

export const ButtonBorder = styled(motion.div)<IStyledProps>`
  position: absolute;
  /* top: 0;
	left: 0; */
  /* top: -0.1rem;
	left: -0.1rem;
	right: -0.1rem;
	bottom: -0.1rem; */
  /* width: 100%;
	height: 100%; */
  z-index: -1;
  /* background-color: rgb(246 40 124 / 45%); */
  /* background-color: rgb(246 40 124 / 45%); */
  background: linear-gradient(
    7.66deg,
    rgba(255, 212, 222, 0.2) -6.04%,
    rgba(255, 255, 255, 0.53) 92.74%
  );
  /* border: 1px solid green; */
  border-radius: ${({ rounded }) => (rounded ? '999rem' : '.4rem')};
  transition: all 0.2s ease-in;
`
