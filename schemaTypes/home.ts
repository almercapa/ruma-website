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
    // Add this field to your homeSettings schema in home.ts
defineField({
  name: 'formspreeId',
  title: 'Formspree Endpoint ID',
  type: 'string',
  description: 'The letters/numbers at the end of your Formspree URL (e.g., xbj...)'
}),
  ],
})