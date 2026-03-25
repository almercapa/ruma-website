import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'leadership',
  title: 'Leadership & Coaches',
  type: 'document',
  fields: [
    defineField({
      name: 'order',
      title: 'Order Priority',
      type: 'number',
      description: '1 for Head Coach, 2 for President, 3 for VP, etc. Lower numbers appear first.',
      validation: (Rule) => Rule.required().min(1)
    }),
    defineField({ 
      name: 'name', 
      title: 'Full Name', 
      type: 'string', 
      validation: (Rule) => Rule.required() 
    }),
    // inside your leadership schema
defineField({
  name: 'role',
  title: 'Role',
  type: 'string', // Ensure this is just 'string'
  // Remove the 'options' block entirely to get rid of the dropdown
}),
    defineField({ 
      name: 'image', 
      title: 'Headshot', 
      type: 'image', 
      options: { hotspot: true } 
    }),
    defineField({ 
      name: 'bio', 
      title: 'Short Bio', 
      type: 'text', 
      rows: 3 
    }),
  ],
})