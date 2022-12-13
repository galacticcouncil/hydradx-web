// Utils
import styled from "styled-components"

// Components

import Header from "../../components/header/header.component"
import Footer from "../../components/footer/footer.component"

// Types
import { INavItem } from "../../types/nav.types"
export interface IProps {
	children: React.ReactNode | React.ReactNode[]
}

const PageLayout = ({ children }: IProps) => {
	const navItems: INavItem[] = [
		// {
		// 	label: "Start",
		// 	href: "/",
		// },
		// {
		// 	label: "Socials",
		// 	href: "/#socials",
		// },
		{
			label: "Docs",
			href: "/#",
			// hasIcon: true,
			// rel: "noopener noreferrer",
			// target: "_blank",
		},
		{
			label: "Tokenomics",
			href: "/#",
			// hasIcon: true,
			// rel: "noopener noreferrer",
			// target: "_blank",
		},
		{
			label: "Github",
			href: "/#",
			// hasIcon: true,
			// rel: "noopener noreferrer",
			// target: "_blank",
		},
		{
			label: "Newsletter",
			href: "/#",
			// hasIcon: true,
			// rel: "noopener noreferrer",
			// target: "_blank",
		},
	]

	// const cta = {
	// 	label: "Contact us",
	// 	href: "/#contact-us",
	// 	width: "14.2rem",
	// }

	return (
		<PageLayoutContainer>
			<Header
				navItems={navItems}
				// cta={cta}
			/>

			<Main>{children}</Main>

			<Footer />
		</PageLayoutContainer>
	)
}

export default PageLayout

const PageLayoutContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	padding: 9rem 2rem 0;
`

const Main = styled.main`
	flex: 1;
`
