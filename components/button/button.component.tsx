// Utils
import { Variants } from "framer-motion"

// Compoennts
import Link from "next/link"

// Styles
import { ButtonContainer, AContainer, ButtonBackground } from "./button.styles"

// Types
import { IButtonLinkProps, IButtonProps } from "./button.types"

export const Button: React.FC<IButtonProps> = (props) => {
	const variants: Variants = {
		initial: {
			top: 0,
			left: 0,
			// boxShadow: "0 0 0 0 #fff",
		},
		hover: {
			top: "-0.4rem",
			left: "-0.4rem",
			// boxShadow: "4px 4px 0px 1px #fff",
		},
	}

	const backgroundVariants: Variants = {
		initial: {
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
		},
		hover: {
			top: "0.4rem",
			left: "0.4rem",
			right: "-0.4rem",
			bottom: "-0.4rem",
		},
	}

	return (
		<ButtonContainer
			variants={variants}
			initial={"initial"}
			whileHover={"hover"}
			{...props}
		>
			<span>{props.children}</span>
			<ButtonBackground variants={backgroundVariants} />
		</ButtonContainer>
	)
}

export const ButtonLink: React.FC<IButtonLinkProps> = (props) => {
	return (
		<AContainer {...props}>
			<Link href={props.href || "#"}>{props.children}</Link>
		</AContainer>
	)
}
