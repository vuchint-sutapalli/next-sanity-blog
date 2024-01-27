// import { createClient } from 'next-sanity'

import { createClient } from "@sanity/client/stega";


import { apiVersion, dataset, projectId, useCdn } from '../env'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  perspective: "published",
  stega: {
    enabled: false,
    studioUrl: "/studio",
  },
})

const builder = imageUrlBuilder(client)

export function urlFor(src) {
  return builder.image(src)
}