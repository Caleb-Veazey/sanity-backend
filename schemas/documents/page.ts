import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'page',
	title: 'Page',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
		}),
		defineField({
			name: 'modules',
			type: 'array',
			of: [
				{ type: 'blog-rollup' },
				{ type: 'creative-module' },
				{ type: 'custom-html' },
				{ type: 'faq-list' },
				{ type: 'hero.centered' },
				{ type: 'hero.postcard' },
				{ type: 'home-page' },
			],
		}),
		defineField({
			name: 'metadata',
			type: 'metadata',
		}),
		defineField({
			name: 'backgroundImage',
			title: 'Background Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
	],
	preview: {
		select: {
			title: 'title',
			slug: 'metadata.slug.current',
		},
		prepare: ({ title, slug }) => ({
			title,
			subtitle: slug && (slug === 'index' ? '/' : `/${slug}`),
		}),
	},
})
