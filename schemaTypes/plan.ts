import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'plan',
  title: 'Membership Plans',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Plan Name', type: 'string' }),
    defineField({ name: 'price', title: 'Price (USD)', type: 'number' }),
    // Add this to your plan schema in plan.ts
defineField({
  name: 'paymentLink',
  title: 'Payment Link (Venmo)',
  type: 'url',
  validation: Rule => Rule.uri({
    scheme: ['http', 'https']
  })
}),
  ],
})