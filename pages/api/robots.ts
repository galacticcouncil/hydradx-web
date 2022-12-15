// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import {crawable, notCrawable} from '../../config/robots.config'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  console.log({NODE_ENV: process.env.NODE_ENV})
  const robots = process.env.NODE_ENV === 'production' ? crawable : notCrawable
  
  res.status(200).send(robots)
}
