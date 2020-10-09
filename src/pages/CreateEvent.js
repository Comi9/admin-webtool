import React from 'react'
import { event } from '../schemas/event'
import FormFields from '../components/FormFields'
import PageNavigation from '../components/PageNavigation'

function CreateEvent() {
	return (
		<>
			<PageNavigation title='Create event' to='/events' icon='arrow-left' />
			<FormFields schema={event} collection='events' defaultValues={event} />
		</>
	)
}

export default CreateEvent
