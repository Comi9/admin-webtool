import React from 'react'
import { useFirestore, useFirestoreDocData } from 'reactfire'
import { event } from '../schemas/event'
import PageNavigation from '../components/PageNavigation'
import FormFields from '../components/FormFields'
import { useParams } from 'react-router-dom'

function EditEvent() {
	const { documentID } = useParams()
	const editableDocument = useFirestoreDocData(useFirestore().collection('events').doc(documentID))

	return (
		<>
			<PageNavigation title='Edit article' to='/events' icon='arrow-left' />
			<FormFields schema={event} collection='events' defaultValues={editableDocument} documentID={documentID} />
		</>
	)
}

export default EditEvent
