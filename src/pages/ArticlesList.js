import React from 'react'
import firebase from 'firebase/app'
import moment from 'moment'
import { Link } from 'react-router-dom'

function ArticlesList({ collection, documents = [] }) {
  const deleteItem = id => firebase.firestore().collection(collection).doc(id).delete()
  const card = (document) => (
    <div key={`${document.id}-${document.timestamp}`} className="w100">
      <div className="uk-card uk-card-default uk-card-hover uk-card-body uk-padding-small">
        <div className="uk-flex uk-flex-between">
          <div className="uk-document-meta uk-margin-small-bottom">
            <div className='uk-margin-small-right'><span className='uk-margin-right-small' data-uk-icon="icon: user; ratio: .7"></span> {document.displayName}</div>
            <div className='uk-margin-small-right'><span className='uk-margin-right-small' data-uk-icon="icon: calendar; ratio: .7"></span> {moment(document.timestamp.toDate()).format('MMMM Do YYYY, H:mm:ss')}</div>
          </div>
          <ul className="uk-iconnav uk-flex-top">
            <Link to={`/articles/edit/${document.id}`} className="uk-icon-link uk-margin-small-right" data-uk-icon="file-edit" />
            <button onClick={() => deleteItem(document.id)} className="uk-icon-link" data-uk-icon="trash" />
          </ul>
        </div>
        <div className="uk-flex uk-flex-between">
          <div>
            <h3 className="uk-card-title uk-margin-remove uk-text-truncate">{document.articleTitle ? document.articleTitle.en : 'No title'}</h3>
            <h5 className="uk-margin-remove uk-text-muted uk-text-truncate">{document.articleTitle ? document.articleTitle.ro : 'Fara titlu' }</h5>
          </div>
          {document.picture && <img className="uk-width-small" src={document.picture} />}
      </div>
      </div>
    </div>
  )

	return (
    <>
      <div data-uk-grid>
        {documents.map(document => card(document))}
      </div>
    </>
	)
}

export default ArticlesList
