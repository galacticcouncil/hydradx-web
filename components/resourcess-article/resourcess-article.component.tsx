import styled from "styled-components"
import { motion, HTMLMotionProps } from "framer-motion"

import Image from "../image/image.component"
import { Button } from "../button/button.component"

import { IArticle } from "../../types/resources.types"
export interface IProps extends HTMLMotionProps<"article"> {
	article: IArticle
}

const ResourcesArticle = ({ article, ...props }: IProps) => {
	return (
		<Article {...props}>
			<IconFigure>
				<Image
					src={article.icon.src}
					alt={article.icon.alt}
					width={65}
					height={65}
				/>
			</IconFigure>
			<P>{article.label}</P>
			<H3>{article.heading}</H3>
			<Button>{article.cta.label}</Button>
		</Article>
	)
}

export default ResourcesArticle

const Article = styled(motion.article)`
	border: 1px solid red;
`

const IconFigure = styled.figure``

const P = styled.p``

const H3 = styled.h3``
