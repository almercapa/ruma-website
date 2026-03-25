// rumasite/schemaTypes/gallery.ts
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'gallery',
  title: 'Gallery (Life on the Mat)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Photo Title/Caption',
      type: 'string',
      description: 'A brief description of the photo (e.g., Tuesday Wrestling Drills)',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Allows you to center faces so they don't get cropped out
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})