// schemas/feature.ts
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'feature',
  title: 'Recognized By / Sponsors',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Organization/Person Name', type: 'string' }),
    defineField({ 
      name: 'logo', 
      title: 'Logo', 
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({ 
      name: 'link', 
      title: 'External Link', 
      type: 'url',
      description: 'Link to their Instagram, YouTube, or Website'
    }),
  ],
})