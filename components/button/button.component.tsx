// Utils

// Compoennts
import Link from "next/link"

// Styles
import { ButtonContainer, AContainer } from "./button.styles"

// Types
import { IButtonLinkProps, IButtonProps } from "./button.types"

export const Button: React.FC<IButtonProps> = (props) => {
	return (
		<ButtonContainer {...props}>
			<span>{props.children}</span>
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
