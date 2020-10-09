import React from "react"
import firebase from "firebase/app"
import moment from "moment"
import { Link } from "react-router-dom"

function LivestreamsList({ collection, documents = [] }) {
  const deleteItem = (id) =>
    firebase.firestore().collection(collection).doc(id).delete()
  const streamPreview = (videoID) => (
    <iframe
      title={videoID}
      src={`https://www.youtube-nocookie.com/embed/${videoID}?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1" width="1920" height="1080" frameborder="0" allowfullscreen uk-responsive uk-video="automute: true`}
    ></iframe>
  )
  const card = (document) => (
    <div key={`${document.id}-${document.timestamp}`} className="w100">
      <div className="uk-card uk-card-default uk-card-hover uk-card-body uk-padding-small">
        <div className="uk-flex uk-flex-between">
          <div className="uk-article-meta uk-margin-small-bottom">
            <div className="uk-margin-small-right">
              <span
                className="uk-margin-right-small"
                data-uk-icon="icon: user; ratio: .7"
              ></span>{" "}
              {document.displayName}
            </div>
            <div className="uk-margin-small-right">
              <span
                className="uk-margin-right-small"
                data-uk-icon="icon: calendar; ratio: .7"
              ></span>{" "}
              {moment(document.timestamp.toDate()).format(
                "MMMM Do YYYY, H:mm:ss"
              )}
            </div>
          </div>
          <ul className="uk-iconnav uk-flex-top">
            <Link
              to={`/livestreams/edit/${document.id}`}
              className="uk-icon-link uk-margin-small-right"
              data-uk-icon="file-edit"
            />
            <button
              onClick={() => deleteItem(document.id)}
              className="uk-icon-link"
              data-uk-icon="trash"
            />
          </ul>
        </div>
        <hr className="uk-divider-icon" />
        <div
          className="uk-child-width-1-4@s uk-grid-small uk-text-center"
          data-uk-grid
        >
          <div className="uk-width-1-4">
            <p className="uk-h4">
              <span class="uk-badge">Livestream EN</span>:{" "}
              {document.livestream.en}
            </p>
            {streamPreview(document.livestream.en)}
          </div>

          <div className="uk-width-1-4">
            <p className="uk-h4">
              {" "}
              <span class="uk-badge">Livestream RO</span>:{" "}
              {document.livestream.ro}
            </p>
            {streamPreview(document.livestream.ro)}
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <div data-uk-grid>{documents.map((document) => card(document))}</div>
    </>
  )
}

export default LivestreamsList
