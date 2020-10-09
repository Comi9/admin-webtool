import React from 'react'
import { useFirestore, useFirestoreCollection } from 'reactfire'
import PageNavigation from '../components/PageNavigation'
import ArticlesList from  '../pages/ArticlesList'


function Articles() {
	const documents = [];
	useFirestoreCollection(useFirestore().collection('articles')).forEach(a => documents.push({ id: a.id, ...a.data() }));
	// console.log(articles)
	return (
		<>
			<PageNavigation title='Articles' count={documents.length} to='/articles/create' search={true} icon='plus-circle' />
			<ArticlesList collection='articles' documents={documents} />
		</>
	)
}

export default Articles
