import type {
	Divider,
	ListItem,
	ListItemBuilder,
	StructureBuilder,
	View,
	ViewBuilder,
} from 'sanity/structure'

export const singleton = (
	S: StructureBuilder,
	title: string,
	id: string,
	views: Array<View | ViewBuilder> = [],
): ListItemBuilder =>
	S.listItem()
		.title(title)
		.id(id)
		.child(
			S.document()
				.schemaType(id)
				.documentId(id)
				.views([S.view.form(), ...views]),
		)

export const group = (
	S: StructureBuilder,
	title: string,
	items: (ListItemBuilder | ListItem | Divider)[],
): ListItemBuilder =>
	S.listItem().title(title).child(S.list().title(title).items(items))

/**
 * Return the text of a block type as a single string. Use in schema previews.
 */
export function getBlockText(
	block?: {
		children?: {
			text: string
		}[]
	}[],
	lineBreakChar: string = '↵ ',
) {
	return (
		block?.reduce((a, c, i) => {
			const text = c.children?.flatMap((c) => c.text).join('') || ''
			return a + text + (i !== block.length - 1 ? lineBreakChar : '')
		}, '') || ''
	)
}

export function getBandcampEmbedUrl(embedCode: string): string | null {
  if (!embedCode) return null;
  const regex = /<iframe.*?src="(.*?)".*?>/i;
  const match = embedCode.match(regex);
  return match && match[1] ? match[1] : null;
}