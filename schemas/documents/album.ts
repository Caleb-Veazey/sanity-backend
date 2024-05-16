// schemas/documents/album.ts
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'album',
  title: 'Album',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bandcampAlbumUrl',
      title: 'Bandcamp Album URL',
      type: 'url',
    }),
    defineField({
      name: 'bandcampEmbedCode',
      title: 'Bandcamp Embed Code',
      type: 'string',
    }),
    defineField({
      name: 'releaseDate',
      title: 'Release Date',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
			name: 'albumArtwork',
			type: 'image',
    }),
    defineField({
      name: 'convertkitPurchaseUrl',
      title: 'Convert Kit Product URL',
      type: 'url',
    }),
    defineField({
      name: 'appleMusicAlbumUrl',
      title: 'Apple Music Album URL',
      type: 'url',
    }),
    defineField({
      name: 'spotifyAlbumUrl',
      title: 'Spotify Album URL',
      type: 'url',
    }),
    // Add more fields as needed (e.g., release date, artwork, etc.)
  ],
})