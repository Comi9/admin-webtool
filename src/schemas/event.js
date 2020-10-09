const event = [
	{
		key: 'eventGenre',
		validation: { required: true },
		label: {
			en: 'Event genre',
			ro: 'Genul evenimentului'
		},
		element: 'input',
		type: 'text',
		extra: {
			autocomplete: 'off',
			rows: null
		}
	},
	{
		key: 'companyName',
		validation: { required: true },
		label: {
			en: 'Name of company/artist',
			ro: 'Nume companie/artist'
		},
		element: 'input',
		type: 'text',
		extra: {
			autocomplete: 'off',
			rows: null
		}
	},
	{
		key: 'country',
		validation: { required: true },
		label: {
			en: 'Country of company/artists',
			ro: 'Țara companiei/artiștilor'
		},
		element: 'input',
		type: 'text',
		extra: {
			autocomplete: 'off',
			rows: null
		}
	},
	{
		key: 'originalTitle',
		validation: { required: true },
		label: {
			en: 'Original title of the performance',
			ro: 'Titlul original al spectacolului'
		},
		element: 'input',
		type: 'text',
		extra: {
			autocomplete: 'off',
			rows: null
		}
	},
	{
		key: 'title',
		validation: { required: true },
		label: {
			en: 'Accepted English translation of the title',
			ro: 'Traducere acceptată în engleză a titlului'
		},
		element: 'input',
		type: 'text',
		extra: {
			autocomplete: 'off',
			rows: null
		}
	},
	{
		key: 'directedBy',
		validation: { required: true },
		label: {
			en: 'Directed by / Choreography by / Performance by',
			ro: 'Regia/ Coregrafia/ Un spectacol de'
		},
		element: 'input',
		type: 'text',
		extra: {
			autocomplete: 'off',
			rows: null
		}
	},
	{
		key: 'eventLanguage',
		validation: { required: true },
		label: {
			en: 'Event language',
			ro: 'Limba în care se desfășoară spectacolul'
		},
		element: 'input',
		type: 'text',
		extra: {
			autocomplete: 'off',
			rows: null
		}
	},
	{
		key: 'ageRestriction',
		validation: { required: false },
		label: {
			en: 'Age restrictions',
			ro: 'Limita de vârstă'
		},
		element: 'input',
		type: 'text',
		extra: {
			autocomplete: 'off',
			rows: null
		}
	},
	{
		key: 'duration',
		validation: { required: true },
		label: {
			en: 'Duration',
			ro: 'Durata'
		},
		element: 'input',
		type: 'text',
		extra: {
			autocomplete: 'off',
			rows: null
		}
	},
	{
		key: 'premiereDate',
		validation: { required: true },
		label: {
			en: 'Date of premiere',
			ro: 'Data premierei'
		},
		element: 'input',
		type: 'text',
		extra: {
			autocomplete: 'off',
			rows: null
		}
	},
	{
		key: 'synopsys',
		validation: { required: true },
		label: {
			en: 'Synopsis (150 words max)',
			ro: 'Sinopsis (150 cuvinte max)'
		},
		element: 'textarea',
		type: 'text',
		extra: {
			autocomplete: 'off',
			rows: 6
		}
	},
	{
		key: 'pressArticle',
		validation: { required: false },
		label: {
			en: 'Artistic creator’s / company manager’s message (100 words max)',
			ro: 'Mesajul regizorului/coregrafului/ managerului companiei (100 cuvinte max)'
		},
		element: 'textarea',
		type: 'text',
		extra: {
			autocomplete: 'off',
			rows: 6
		}
	},
	{
		key: 'castAndCrew',
		validation: { required: true },
		label: {
			en: 'Leading cast & crew',
			ro: 'Echipa de creație și distribuția'
		},
		element: 'textarea',
		type: 'text',
		extra: {
			autocomplete: 'off',
			rows: 6
		}
	}
]

export { event }