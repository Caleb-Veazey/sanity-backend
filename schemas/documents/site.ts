import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'site',
	title: 'Site',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
		}),
		defineField({
			name: 'menu',
			type: 'array',
			of: [{ type: 'link' }, { type: 'link.list' }],
		}),
		defineField({
			name: 'ctas',
			title: 'Call-to-actions',
			type: 'array',
			of: [{ type: 'cta' }],
		}),
		defineField({
			name: 'ogimage',
			type: 'image',
		}),
		defineField({
			name: 'socialLinks',
			title: 'Social Media Links',
			type: 'object',
			fields: [
				{
					name: 'facebook',
					title: 'Facebook',
					type: 'url',
				},
				{
					name: 'instagram',
					title: 'Instagram',
					type: 'url',
				},
				{
					name: 'spotify',
					title: 'Spotify',
					type: 'url',
				},
				{
					name: 'appleMusic',
					title: 'Apple Music',
					type: 'url',
				},
				{
					name: 'soundcloud',
					title: 'SoundCloud',
					type: 'url',
				},
			],
		}),
	],
})
