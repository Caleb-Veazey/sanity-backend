// schemas/modules/bandcamp-embed.ts
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'bandcampEmbed',
  title: 'Bandcamp Embed',
  type: 'object',
  fields: [
    defineField({
      name: 'album',
      title: 'Album',
      type: 'reference',
      to: [{ type: 'album' }],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'album.title',
    },
  },
})