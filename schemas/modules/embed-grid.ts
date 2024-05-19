// sanity/schemas/modules/embed-grid.ts
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'embedGrid',
  title: 'Embed Grid',
  type: 'object',
  fields: [
    defineField({
      name: 'albums',
      title: 'Albums',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'album' }] }],
    }),
    defineField({
      name: 'youTubeVideos',
      title: 'YouTube Videos',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'youTubeVideo' }] }],
    }),
    defineField({
      name: 'embedStyle',
      title: 'Embed Style',
      type: 'string',
      options: {
        list: [
          { title: 'Portrait', value: 'portrait' },
          { title: 'Landscape', value: 'landscape' },
        ],
        layout: 'radio',
      },
      initialValue: 'portrait',
    }),
  ],
  preview: {
    select: {
      albums: 'albums',
      youTubeVideos: 'youTubeVideos',
    },
    prepare({ albums, youTubeVideos }) {
      const items = [...(albums || []), ...(youTubeVideos || [])];
      const titles = items.map((item: any) => item.title).join(', ');
      return {
        title: 'Embed Grid',
        subtitle: titles,
      };
    },
  },
});