// schemas/home.ts
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'homeSettings',
  title: 'Home Page Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'heroVideo',
      title: 'Hero Background Video',
      type: 'file',
      options: { accept: 'video/mp4' },
      description: 'Upload a new practice compilation (MP4 format)'
    }),
    defineField({
      name: 'carouselImages',
      title: 'Carousel Images (More than just a gym)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      description: 'Add photos from practices to show the atmosphere.'
    }),
    defineField({
      name: 'historyPhoto',
      title: 'About Page - History Photo',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'formspreeId',
      title: 'Formspree Endpoint ID',
      type: 'string',
      description: 'The letters/numbers at the end of your Formspree URL (e.g., xbj...)'
    }),
    // --- New Social Links Section ---
    defineField({
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
      description: 'Full link to the RUMA Instagram (e.g., https://instagram.com/...)',
      validation: Rule => Rule.uri({ scheme: ['http', 'https'] })
    }),
    defineField({
      name: 'groupMeUrl',
      title: 'GroupMe URL',
      type: 'url',
      description: 'The invite link for the current semester GroupMe',
      validation: Rule => Rule.uri({ scheme: ['http', 'https'] })
    }),
    defineField({
      name: 'discordUrl',
      title: 'Discord URL',
      type: 'url',
      description: 'The permanent invite link for the RUMA Discord',
      validation: Rule => Rule.uri({ scheme: ['http', 'https'] })
    }),
  ],
})