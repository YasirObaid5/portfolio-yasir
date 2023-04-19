// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
// import sanityClient from '@sanity/client'
import {client }from '../../lib/client'
const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
}

// const client = sanityClient(config)

export default async function createComment(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { _id, name, email, message } = JSON.parse(req.body)

  try {
    await client.create({
      _type: 'contactForm',
      contactForm: {
        _type: 'reference',
        _ref: _id,
      },
      name,
      email,
      message,
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Couldn't submit comment", error })
  }

  return res.status(200).json({ message: 'Comment submitted' })
}
