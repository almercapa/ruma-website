import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'event',
  title: 'Upcoming Events',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Event Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'date', title: 'Event Date', type: 'date', options: { dateFormat: 'MMM D' } }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: { list: ['Tournament', 'Social', 'Seminar'] },
    }),
    defineField({ name: 'description', title: 'Details', type: 'text', rows: 3 }),
  ],
})