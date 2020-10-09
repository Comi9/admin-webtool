import React from 'react'
import { useFirestore, useFirestoreCollection } from 'reactfire'
import PageNavigation from '../components/PageNavigation'
import EventsList from  '../pages/EventsList'

function Events() {
	const documents = [];
	useFirestoreCollection(useFirestore().collection('events')).forEach(a => documents.push({ id: a.id, ...a.data() }));
	console.log(documents)
	return (
		<>
			<PageNavigation title='Events' count={documents.length} to='/events/create' search={true} icon='plus-circle' />
			<EventsList collection='events' documents={documents} />
		</>
	)
}

export default Events
