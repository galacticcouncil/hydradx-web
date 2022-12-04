import styled from "styled-components"

import Image from "../image/image.component"

const Footer = () => {
	return (
		<FooterContainer>
			<LogoFigure>
				<Image
					src="/assets/logo-v2.svg"
					alt="HydraDX"
					width={"100%"}
					height={"100%"}
					style={{ objectFit: "contain" }}
				/>
			</LogoFigure>
		</FooterContainer>
	)
}

export default Footer

const FooterContainer = styled.footer`
	max-width: 110rem;
	margin: 0 auto;
`

const LogoFigure = styled.figure`
	display: flex;
	align-items: center;
	justify-content: center;
`
