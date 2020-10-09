import React from "react"
import { livestream } from "../schemas/livestream"
import FormFields from "../components/FormFields"
import PageNavigation from "../components/PageNavigation"

function CreateLivestream() {
  return (
    <>
      <PageNavigation
        title="Create livestream"
        to="/livestreams"
        icon="arrow-left"
      />
      <FormFields
        schema={livestream}
        collection="livestreams"
        defaultValues={livestream}
      />
    </>
  )
}

export default CreateLivestream
