// schemas/practice.ts
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'practice',
  title: 'Weekly Practices',
  type: 'document',
  fields: [
    defineField({
      name: 'order',
      title: 'Order Number',
      type: 'number',
      description: 'Set 1 for Sunday, 2 for Monday, 3 for Tuesday, etc. to sort correctly.',
      validation: (Rule) => Rule.required().min(1).max(7),
    }),
    defineField({
      name: 'day',
      title: 'Day of the Week',
      type: 'string',
      options: {
        list: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], 
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'timeSlot',
      title: 'Time Slot',
      type: 'string',
      description: 'Format: HH:MM AM/PM – HH:MM AM/PM (e.g., 5:00 PM – 7:00 PM)',
      validation: (Rule) => 
        Rule.required().regex(
          /^(0?[1-9]|1[0-2]):[0-5][0-9]\s[AP]M\s[–-]\s(0?[1-9]|1[0-2]):[0-5][0-9]\s[AP]M$/,
          { name: 'time format', invert: false }
        ).error('Must match the format: 5:00 PM – 7:00 PM'),
    }),
    defineField({
      name: 'description',
      title: 'Session Focus',
      type: 'text',
      rows: 3,
    }),
  ],
})