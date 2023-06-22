import React from 'react'
import styled, { css } from 'styled-components'
import { motion, Variants } from 'framer-motion'

import H3 from '../content-h3/content-h3.component'
import P from '../content-p/content-p.component'
import Image from '../image/image.component'
// import {Button} from '../button/button.component'

const OTCSection = () => {
  const contentVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const headerVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.22, 1.09, 0.59, 0.95],
        duration: 0.8,
        delay: 0.1,
      },
    },
  }

  const pVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 0.8,
      y: 0,
      transition: {
        ease: [0.22, 1.09, 0.59, 0.95],
        duration: 0.8,
        delay: 0.1,
      },
    },
  }

  const variants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.6,
      },
    },
  }

  const iluVariants: Variants = {
    hidden: {
      opacity: 0,
      // y: 50,
    },
    visible: {
      // y: 0,
      opacity: 1,
      transition: {
        ease: [0.22, 1.09, 0.59, 0.95],
        duration: 0.8,
        delay: 0.3,
      },
    },
  }

  return (
    <Section
      variants={contentVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <H3 variants={headerVariants}>Over-the-counter trading</H3>
      <P variants={pVariants}>
        Trade your favorite assets directly with other traders. No trusted third
        parties and no slippage. Set your price and let others fill your orders.
      </P>

      <Button
        variants={headerVariants}
        href="https://app.hydradx.io/otc"
        target="_blank"
        rel="noopener noreferrer"
      >
        LEARN MORE
      </Button>

      <ContentFigure
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <IluFigure variants={iluVariants}>
          <Image
            src="/assets/otc-section/otc-illu.png"
            alt="Over-the-counter trading"
            width={'100%'}
            height={'100%'}
            style={{
              objectFit: 'contain',
            }}
          />
        </IluFigure>
      </ContentFigure>
    </Section>
  )
}

export default OTCSection

const Section = styled(motion.section)`
  position: relative;
  padding-top: 0rem;
  margin-bottom: 16.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  p {
    max-width: 70.8rem;
    margin: 0 auto 3rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
      padding-top: 6.6rem;
      margin-bottom: 26.7rem;
      @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      }
    }
  }
`

const ContentFigure = styled(motion.figure)`
  /* border: 1px solid blue; */
  position: relative;
  flex-grow: 1;
  overflow: hidden;
  margin: 0 -2rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
      margin: 0;
      @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      }
    }
  }
`

const IluFigure = styled(motion.figure)`
  position: relative;
  display: flex;
  width: 150%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  /* border: 1px solid red; */
  /* margin-left: -7rem; */
  left: 52%;
  transform: translateX(-50%);

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
      width: 100%;
      margin-left: 2.5rem;

      left: unset;
      transform: unset;
      @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      }
    }
  }
`

const buttonStyles = css`
  cursor: crosshair;

  background: transparent;
  display: inline-block;

  border-radius: 0.4rem;
  padding: 12px 3.7rem;
  font-family: 'Chakra Petch';
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 150%;

  letter-spacing: 0.105em;
  text-transform: uppercase;

  color: #ffffff;

  transition: all 0.3s ease-out;
`

const Button = styled(motion.a)`
  ${buttonStyles}
  margin-bottom: 8.6rem;

  text-align: center;
  text-transform: uppercase;

  background: rgba(76, 213, 243, 0.12);

  border: 1px solid #85d1ff;
  color: #85d1ff;

  &:hover {
    background-color: rgba(1, 107, 172, 0.9);
    color: #ffffff;
  }

  &:active {
    background-color: #3192cd;
    border: 1px solid #a6ddff;
    color: #ffffff;
  }
`
