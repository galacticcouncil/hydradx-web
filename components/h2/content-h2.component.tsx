// import localFont from "@next/font/local"
import styled from "styled-components"
import { HTMLMotionProps, motion } from "framer-motion"

import Image from "../image/image.component"

interface IContainerProps {
  variant?: "LIGHTBLUE" | "BLUE" | "RED"
}

export interface IProps extends HTMLMotionProps<"h2">, IContainerProps {}

// const headerFont = localFont({
// 	src: [
// 		{
// 			path: "../../public/fonts/neue-plak-cufonfonts/Neue-Plak-Regular.ttf",
// 			weight: "400",
// 			style: "nomrmal",
// 		},
// 	],
// })

const H2 = ({ children, ...props }: IProps) => {
  return (
    <Figure
      {...props}
      // className={`${headerFont.className} ${props.className}`}
    >
      {props.variant === "LIGHTBLUE" && (
        <>
          <Image
            className="desktop"
            src="/assets/headings/hydra-omnipool.svg"
            alt="Hydra Omnipool"
            width={"100%"}
            height={"100%"}
          />
          <Image
            className="mobile"
            src="/assets/headings/hydra-omnipool-mobile.svg"
            alt="Hydra Omnipool"
            width={"100%"}
            height={"100%"}
          />
        </>
      )}
      {props.variant === "BLUE" && (
        <>
          <Image
            className="desktop"
            src="/assets/headings/hydradx-roadmap.svg"
            alt="Hydra Roadmap"
            width={"100%"}
            height={"100%"}
          />
          <Image
            className="mobile"
            src="/assets/headings/hydradx-roadmap-mobile-v2.svg"
            alt="Hydra Roadmap"
            width={"100%"}
            height={"100%"}
          />
        </>
      )}
      {props.variant === "RED" && (
        <>
          <Image
            className="desktop"
            src="/assets/headings/hydra-protocol-v2.svg"
            alt="Hydra Protocol"
            width={"100%"}
            height={"100%"}
          />
          <Image
            className="mobile"
            src="/assets/headings/hydra-protocol-mobile-v2.svg"
            alt="Hydra Protocol"
            width={"100%"}
            height={"100%"}
          />
        </>
      )}
    </Figure>
  )
}

export default H2

const Figure = styled(motion.figure)<IContainerProps>`
  max-width: 22.8rem;
  margin: 0 auto 6rem;

  .desktop {
    display: none;
    visibility: hidden;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 36.1rem;
    @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
      max-width: 59.5rem;

      .desktop {
        display: flex;
        visibility: visible;
      }
      .mobile {
        display: none;
        visibility: hidden;
      }

      @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      }
    }
  }
`
