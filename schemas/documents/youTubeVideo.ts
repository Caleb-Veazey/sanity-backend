// sanity/schemas/documents/youTubeVideo.ts
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'youTubeVideo',
  title: 'YouTube Video',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'videoId',
      title: 'Video ID',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    // Add more fields as needed (e.g., description, thumbnail, etc.)
  ],
});