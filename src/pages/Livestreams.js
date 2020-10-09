import React from "react"
import { useFirestore, useFirestoreCollection } from "reactfire"
import PageNavigation from "../components/PageNavigation"
import LivestreamsList from "../pages/LivestreamsList"

function Livestreams() {
  const documents = []
  useFirestoreCollection(
    useFirestore().collection("livestreams")
  ).forEach((a) => documents.push({ id: a.id, ...a.data() }))
  console.log(documents)
  return (
    <>
      <PageNavigation
        title="Livestreams"
        count={documents.length}
        to="/livestreams/create"
        search={true}
        icon="plus-circle"
      />
      <LivestreamsList collection="livestreams" documents={documents} />
    </>
  )
}

export default Livestreams
