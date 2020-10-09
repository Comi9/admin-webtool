import React from 'react'
import { useFirestore, useFirestoreDocData } from 'reactfire'
import { article } from '../schemas/article'
import PageNavigation from '../components/PageNavigation'
import FormFields from '../components/FormFields'
import { useParams } from 'react-router-dom'

function EditArticle() {
	const { documentID } = useParams()
	const editableDocument = useFirestoreDocData(useFirestore().collection('articles').doc(documentID))

	return (
		<>
			<PageNavigation title='Edit article' to='/articles' icon='arrow-left' />
			<FormFields schema={article} collection='articles' defaultValues={editableDocument} documentID={documentID} />
		</>
	)
}

export default EditArticle
