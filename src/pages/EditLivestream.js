import React from "react"
import { useFirestore, useFirestoreDocData } from "reactfire"
import { livestream } from "../schemas/livestream"
import PageNavigation from "../components/PageNavigation"
import FormFields from "../components/FormFields"
import { useParams } from "react-router-dom"

function EditLivestream() {
  const { documentID } = useParams()
  const editableDocument = useFirestoreDocData(
    useFirestore().collection("livestreams").doc(documentID)
  )

  return (
    <>
      <PageNavigation
        title="Edit livestream"
        to="/livestreams"
        icon="arrow-left"
      />
      <FormFields
        schema={livestream}
        collection="livestreams"
        defaultValues={editableDocument}
        documentID={documentID}
      />
    </>
  )
}

export default EditLivestream
