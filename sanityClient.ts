// sanityClient.ts
import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'qg3cdnul', // Found in your sanity.json or manage.sanity.io
  dataset: 'production',
  useCdn: true, // Faster response using Sanity's edge cache
  apiVersion: '2026-03-23', // Use current date
})