// Utils
import styled from "styled-components"

// Components
import Header from "../../components/header/header.component"
import Footer from "../../components/footer/footer.component"

// Types
export interface IProps {
	children: React.ReactNode | React.ReactNode[]
}

const PageLayout = ({ children }: IProps) => {
	const navItems = [
		{
			label: "Locations",
			href: "/#cascais",
			width: "7.3rem",
		},
		{
			label: "About us",
			href: "/#about-us",
			width: "7.2rem",
		},
		{
			label: "Mission",
			href: "/#mission",
			width: "6rem",
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
			// navItems={navItems}
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
