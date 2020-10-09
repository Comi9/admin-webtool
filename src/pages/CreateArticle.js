import React from 'react'
import { article } from '../schemas/article'
import FormFields from '../components/FormFields'
import PageNavigation from '../components/PageNavigation'

function CreateArticle() {
	return (
		<>
			<PageNavigation title='Create article' to='/articles' icon='arrow-left' />
			<FormFields schema={article} collection='articles' defaultValues={article} />
		</>
	)
}

export default CreateArticle
