// Utils
import styled, { css } from "styled-components"

// Types
interface IHamButtonProps {
	isOpen: boolean
}
export interface IProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		IHamButtonProps {}

const HamMenuButton = ({ isOpen, onClick, ...restProps }: IProps) => {
	return (
		<HamButton className="ham" onClick={onClick} isOpen={isOpen} {...restProps}>
			<div />
			<div />
			<div />
		</HamButton>
	)
}

export default HamMenuButton

const HamButton = styled.button<IHamButtonProps>`
	cursor: pointer;
	transition: all 0.5s ease-out;
	display: block;
	background-color: transparent;
	border: none;
	width: 3.5rem;
	height: 2.5rem;
	position: relative;
	div {
		position: absolute;
		width: 3.5rem;
		height: 1px;
		background-color: #000;
		transition: all 0.3s ease-in-out;
		${(props) =>
			props.isOpen
				? css`
						&:nth-child(1) {
							top: 1rem;
							transform: rotate(45deg);
						}
						&:nth-child(2) {
							opacity: 0;
						}
						&:nth-child(3) {
							bottom: 1.4rem;
							transform: rotate(-45deg);
						}
				  `
				: css`
						&:nth-child(1) {
							top: 0;
						}
						&:nth-child(2) {
							top: 50%;
							transform: translateY(-50%);
						}
						&:nth-child(3) {
							bottom: 0;
						}
				  `}
	}

	&:focus {
		outline: none;
	}
`
