// schemas/modules/bandcamp-embed-grid.ts
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'bandcampEmbedGrid',
  title: 'Bandcamp Embed Grid',
  type: 'object',
  fields: [
    defineField({
      name: 'albums',
      title: 'Albums',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'album' }] }],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      albums: 'albums',
    },
    prepare({ albums }) {
      const titles = albums.map((album: any) => album.title).join(', ')
      return {
        title: 'Bandcamp Embed Grid',
        subtitle: titles,
      }
    },
  },
})