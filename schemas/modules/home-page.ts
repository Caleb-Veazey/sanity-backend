import { VscHome } from 'react-icons/vsc'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'home-page',
	title: 'Home Page',
	icon: VscHome,
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
		}),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'array',
			of: [{ type: 'block' }],
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'primaryCTAText',
      title: 'Primary Call To Action Text',
      type: 'string',
		}),
    defineField({
      name: 'primaryCTALink',
      title: 'Primary Call To Action Link',
      type: 'url',
		}),
    defineField({
      name: 'videoLink',
      title: 'Video Link',
      type: 'url',
		})
  ],
})