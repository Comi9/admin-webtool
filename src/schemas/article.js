const article = [
	{
		key: 'articleTitle',
		element: 'input',
		type: 'text',
		validation: { required: true },
		label: { en: 'Title', ro: 'Titlu' },
		extra: { autocomplete: 'off', rows: null },
		editor: false,
	},
	{
		key: 'articleHeadline',
		element: 'textarea',
		type: 'text',
		validation: { required: false },
		label: { en: 'Headline', ro: 'Introducere' },
		extra: { autocomplete: 'off', rows: 6 },
		editor: true,
	},
	{
		key: 'articleBody',
		element: 'textarea',
		type: 'text',
		validation: { required: true },
		label: { en: 'Body', ro: 'Corp' },
		extra: { autocomplete: 'off', rows: 6 },
		editor: true,
	}
]

export { article }