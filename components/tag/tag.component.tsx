import styled from 'styled-components'
import { HTMLMotionProps, motion } from 'framer-motion'

import Image from '../image/image.component'

export interface IProps {
  label: string
}

const Tag = ({ label }: IProps) => {
  return (
    <TagContainer>
      <figure>
        <Image
          src="/assets/icons/time.svg"
          alt="Time"
          width={14}
          height={14}
          style={{ objectFit: 'contain' }}
        />
      </figure>
      <span>{label}</span>
    </TagContainer>
  )
}

export default Tag

const TagContainer = styled.div`
  display: inline-flex;
  align-items: center;
  background: linear-gradient(90deg, #fc408c 0%, #57b3eb 100%);
  border-radius: 9999rem;
  padding: 0.6rem 1rem 0.5rem 0.7rem;
  color: #000107;

  font-family: 'Chakra Petch';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;

  margin-bottom: 0.7rem;

  text-align: center;
  text-transform: uppercase;

  figure {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    line-height: 1;
  }
`
