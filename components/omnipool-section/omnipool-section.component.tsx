import styled from "styled-components"

import { Button } from "../button/button.component"
import H2 from "../h2/content-h2.component"
import H3 from "../content-h3/content-h3.component"
import P from "../content-p/content-p.component"
import Image from "../image/image.component"

const OmnipoolSection = () => {
	return (
		<Section>
			<IluFigure>
				<Image
					className="desktop-app-ilu"
					src={"/assets/hero-section/destop-app-ilu-v2.png"}
					alt={"desktop app ilu"}
					width="100%"
					height="100%"
				/>
				<Image
					className="mobile-app-ilu"
					src={"/assets/hero-section/mobile-app-ilu.png"}
					alt={"mobile app ilu"}
					width="100%"
					height="100%"
				/>
			</IluFigure>

			<H2 variant="LIGHTBLUE">
				Hydra<sup>dx</sup> <span>omnipool</span>
			</H2>

			<GridContainer>
				<Content>
					<H3>Meet single-sided liquidity provisioning.</H3>
					<P>
						Provide liquidity only for the asset you want. The Omnipool will
						mint and burn a corresponding amount of the pool token LRNA.
					</P>

					<Button>LEARN MORE</Button>
				</Content>
				<ContentFigure>
					<FirstIluCoin>
						<Image
							src="/assets/omnipool/first-ilu-coin.svg"
							alt="first ilu coin"
							width={"100%"}
							height={"100%"}
							style={{ objectFit: "contain" }}
						/>
					</FirstIluCoin>
					<FirstIlu>
						<Image
							src="/assets/omnipool/first-ilu-v2.png"
							alt="first ilu"
							width={"100%"}
							height={"100%"}
							style={{
								objectFit: "contain",
							}}
						/>
					</FirstIlu>
				</ContentFigure>
			</GridContainer>

			<GridContainer>
				<Content>
					<H3>Dive into deeper liquidity with efficiency gains.</H3>
					<P>
						By combining all assets into a single trading pool, the HydraDX
						brings unparalleled efficiencies to AMMs.
					</P>

					<Button>LEARN MORE</Button>
				</Content>
				<ContentFigure>
					<SecondIlu>
						<Image
							src="/assets/omnipool/second-ilu-v2.png"
							alt="second ilu"
							width={"100%"}
							height={"100%"}
							style={{
								objectFit: "contain",
							}}
						/>
					</SecondIlu>
				</ContentFigure>
			</GridContainer>

			<GridContainer>
				<Content>
					<H3>Experience less impermanent loss.</H3>
					<P>
						Liquidity Providers are supported by several non-inflationary
						mechanisms for mitigating impermanent loss.
					</P>

					<Button>LEARN MORE</Button>
				</Content>
				<ContentFigure>
					<ThirdIlu>
						<Image
							src="/assets/omnipool/third-ilu.png"
							alt="third ilu"
							width={"100%"}
							height={"100%"}
						/>
					</ThirdIlu>
				</ContentFigure>
			</GridContainer>

			<GridContainer>
				<Content>
					<H3>Earn rewards from Hydrated Farms</H3>
					<P>
						Provide liquidity for selected assets and receive additional rewards
						on top of trading fees. Paid out HDX or any other supported asset.
					</P>

					<Button>LEARN MORE</Button>
				</Content>
				<ContentFigure>
					<FourthIlu>
						<Image
							src="/assets/omnipool/fourth-ilu.png"
							alt="fourth ilu"
							width={"100%"}
							height={"100%"}
						/>
					</FourthIlu>
				</ContentFigure>
			</GridContainer>
		</Section>
	)
}

export default OmnipoolSection

const Section = styled.section`
	padding-top: 6.6rem;
	margin-bottom: 25rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			padding-top: 9.156rem;
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const IluFigure = styled.figure`
	width: 100%;
	max-width: 34.543rem;
	margin: 0 auto 12.1rem;

	.desktop-app-ilu {
		display: none;
		visibility: hidden;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			max-width: 102.9rem;

			.desktop-app-ilu {
				display: block;
				visibility: visible;
			}
			.mobile-app-ilu {
				display: none;
				visibility: hidden;
			}
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const GridContainer = styled.div`
	/* max-width: 32.4rem;
	margin: 0 auto; */

	display: flex;
	justify-content: space-evenly;
	align-items: center;
	gap: 5rem;

	margin-bottom: 9.2rem;

	&:nth-of-type(1) {
		/* border: 1px solid red; */
		flex-direction: column;
		overflow: hidden;
		margin: 0 -2rem 9.2rem -2rem;
		padding: 0 2rem;
	}

	&:nth-of-type(2) {
		/* border: 1px solid green; */
		flex-direction: column;
	}

	&:nth-of-type(3) {
		/* border: 1px solid blue; */
		flex-direction: column;
	}

	&:nth-of-type(4) {
		/* border: 1px solid yellow; */
		flex-direction: column;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			max-width: 110rem;

			&:nth-of-type(1) {
				flex-direction: row-reverse;
				overflow: unset;
				margin: 13.2rem auto 9.2rem;
			}

			&:nth-of-type(2) {
				flex-direction: row;
				margin: 0 auto 9.2rem;
			}

			&:nth-of-type(3) {
				flex-direction: row;
				margin: 0 auto 9.2rem;
			}

			&:nth-of-type(4) {
				flex-direction: row-reverse;
				margin: 0 auto 9.2rem;
			}

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const Content = styled.div`
	/* border: 1px solid red; */
	align-self: center;
	max-width: 45.3rem;
	width: 100%;
`

const ContentFigure = styled.figure`
	/* border: 1px solid blue; */
	position: relative;
`

const FirstIlu = styled.figure`
	width: 100%;
	max-width: 47.408rem;
	display: flex;
	align-items: center;
	justify-content: center;
`

const FirstIluCoin = styled.figure`
	display: flex;
	align-items: center;
	justify-content: center;

	position: absolute;
	z-index: -1;

	width: 18.252rem;
	height: 18.173rem;

	top: -7rem;
	right: -7rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			width: 26.702rem;
			height: 26.586rem;

			top: -12rem;
			right: -8rem;
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const SecondIlu = styled.figure`
	width: 100%;
	max-width: 47.408rem;
	display: flex;
	align-items: center;
	justify-content: center;
`

const ThirdIlu = styled.figure`
	width: 100%;
	max-width: 47.408rem;
	display: flex;
	align-items: center;
	justify-content: center;
`

const FourthIlu = styled.figure`
	width: 100%;
	max-width: 49.2rem;
	display: flex;
	align-items: center;
	justify-content: center;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`
