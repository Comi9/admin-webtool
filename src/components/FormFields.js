import React, { useState, useEffect, useRef } from "react"
import { useForm, Controller } from "react-hook-form"
import ReactQuill from "react-quill"
import firebase from "firebase/app"
import "firebase/firestore"
import { useUser } from "reactfire"
import { pick } from "lodash"
import { useDropzone } from "react-dropzone"
import Cropper from "react-cropper"
import { isEmpty } from "lodash"
import "cropperjs/dist/cropper.css"

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#222",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
}

function FormFields({ schema, collection, documentID = null, defaultValues }) {
  const {
    register,
    control,
    handleSubmit,
    errors,
    clearError,
    formState,
  } = useForm({ mode: "onChange", defaultValues })
  const { dirty, isSubmitting, touched } = formState
  const onSubmit = (data) => setData(data)
  const [data, setData] = useState()

  const [files, setFiles] = useState([])
  const [src, setSrc] = useState(defaultValues.picture || "")
  const [cropResult, setCropResult] = useState(defaultValues.picture || "")

  const { uid, displayName } = useUser()
  const formData = useRef(null)
  const cropper = useRef(null)

  useEffect(() => {
    if (documentID) {
      touched &&
        data &&
        firebase
          .firestore()
          .collection(collection)
          .doc(documentID)
          .update({
            ...pick(data, Object.keys(touched)),
            uid,
            displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            picture: cropResult,
          })
          .then(() => {
            window.UIkit.notification({
              message: "Updated",
              status: "success",
              pos: "top-right",
              timeout: 5000,
            })
            clearError()
          })
          .catch(function (error) {
            window.UIkit.notification({
              message: "Something went wrong. Please try again later!",
              status: "danger",
              pos: "top-right",
              timeout: 5000,
            })
          })
    } else {
      data &&
        firebase
          .firestore()
          .collection(collection)
          .add({
            ...data,
            uid,
            displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            picture: cropResult,
          })
          .then(() => {
            window.UIkit.notification({
              message: "Published",
              status: "success",
              pos: "top-right",
              timeout: 5000,
            })
            clearError()
            formData.current.reset()
          })
          .catch(function (error) {
            window.UIkit.notification({
              message: "Something went wrong. Please try again later!",
              status: "danger",
              pos: "top-right",
              timeout: 5000,
            })
          })
    }
  }, [
    clearError,
    collection,
    cropResult,
    data,
    dirty,
    displayName,
    documentID,
    touched,
    uid,
  ])

  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview))
    },
    [files]
  )

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setPicture(acceptedFiles[0])
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        )
      )
    },
  })

  const setPicture = (file) => {
    const reader = new FileReader()
    reader.onload = () => setSrc(reader.result)
    reader.readAsDataURL(file)
  }

  const thumbs = files.map((file) => (
    <li className="uk-active" key={file.name}>
      <a onClick={() => setPicture(file)}>
        <img src={file.preview} width="100" alt="tile" />
      </a>
    </li>
  ))

  const cropImage = (e) => {
    e.preventDefault()
    if (typeof cropper.current.getCroppedCanvas() === "undefined") return
    setCropResult(
      cropper.current
        .getCroppedCanvas({ width: 1280 })
        .toDataURL("image/jpeg", 0.8)
    )
  }

  const formFields = schema.map((field) => {
    const { key, label, type, extra, validation } = field
    const fieldEnID = `${key}.en`
    const fieldRoID = `${key}.ro`
    const classNameEn = `uk-${field.element} ${
      errors[key]?.en ? "uk-form-danger" : ""
    } minw100`
    const classNameRo = `uk-${field.element} ${
      errors[key]?.ro ? "uk-form-danger" : ""
    } minw100`

    return (
      <div
        className="uk-card uk-card-hover uk-card-body uk-padding uk-flex"
        key={key}
      >
        <div className="uk-width-expand uk-margin-small-right">
          <label
            className="uk-form-label uk-panel uk-panel-box uk-text-truncate"
            htmlFor={fieldEnID}
          >
            {label.en} {validation.required && "*"}
          </label>
          <div className="uk-form-controls">
            {field.editor ? (
              <Controller
                as={
                  <ReactQuill
                    ref={register({ required: validation.required })}
                  />
                }
                defaultValue={defaultValues[key]?.en || ""}
                control={control}
                name={fieldEnID}
              />
            ) : (
              <field.element
                className={classNameEn}
                id={fieldEnID}
                name={fieldEnID}
                type={type}
                autoComplete="off"
                rows={extra.rows}
                defaultValue={defaultValues[key]?.en}
                ref={register({ required: validation.required })}
              />
            )}
            {errors[key]?.en && (
              <span className="uk-text-small uk-text-danger">
                This field is required
              </span>
            )}
          </div>
        </div>
        <div className="uk-width-expand uk-margin-small-left">
          <label
            className="uk-form-label uk-panel uk-panel-box uk-text-truncate"
            htmlFor={fieldRoID}
          >
            {label.ro} {validation.required && "*"}
          </label>
          <div className="uk-form-controls">
            {field.editor ? (
              <Controller
                as={
                  <ReactQuill
                    ref={register({ required: validation.required })}
                  />
                }
                defaultValue={defaultValues[key]?.ro || ""}
                control={control}
                name={fieldRoID}
              />
            ) : (
              <field.element
                className={classNameRo}
                id={fieldRoID}
                name={fieldRoID}
                type={type}
                autoComplete="off"
                rows={extra.rows}
                defaultValue={defaultValues[key]?.ro}
                ref={register({ required: validation.required })}
              />
            )}
            {errors[key]?.ro && (
              <span className="uk-text-small uk-text-danger">
                Câmp obligatoriu
              </span>
            )}
          </div>
        </div>
      </div>
    )
  })

  return (
    <form
      className="uk-form-stacked"
      ref={formData}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div data-uk-margin>{formFields}</div>

      <>
        <div className="uk-padding">
          <section className="container">
            <div style={baseStyle} {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
          </section>
          <div className="uk-flex uk-margin-small-top uk-flex-between">
            <ul className="uk-thumbnav">{thumbs}</ul>
            {!isEmpty(files) && (
              <button
                className="uk-button uk-button-default"
                onClick={() => setFiles([])}
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {(!isEmpty(files) || !isEmpty(defaultValues.picture)) && (
          <>
            <Cropper
              checkOrientation={false}
              className="uk-height-large uk-background-muted uk-panel"
              aspectRatio={21 / 9}
              preview=".img-preview"
              guides={false}
              src={src}
              ref={cropper}
              viewMode={1}
              zoomable={false}
            />

            <button
              className="uk-button uk-button-primary uk-margin uk-width-1-1"
              onClick={cropImage}
            >
              Crop Image
            </button>

            <div className="uk-flex uk-child-width-1-2">
              <div className="uk-card uk-card-body uk-card-default uk-padding-small">
                <h4>Crop</h4>
                <img src={cropResult} alt="croppedPicture" />
              </div>

              <div className="uk-card uk-card-body uk-card-default uk-padding-small uk-margin-small-left">
                <h4>Preview</h4>
                <div className="img-preview uk-overflow-hidden uk-width-1-1 uk-height-small" />
              </div>
            </div>
          </>
        )}
      </>

      <div data-uk-margin className="uk-margin-top uk-margin-medium-right">
        <div className="uk-flex uk-flex-right">
          <button
            className="uk-button uk-button-text uk-margin-medium-right"
            type="reset"
            onClick={() => clearError()}
          >
            Reset
          </button>
          <button
            className="uk-button uk-button-primary"
            disabled={!formState.isValid || !dirty}
            type="submit"
          >
            {isSubmitting ? (
              <div data-uk-spinner></div>
            ) : documentID ? (
              "Update"
            ) : (
              "Publish"
            )}
          </button>
        </div>
      </div>
    </form>
  )
}

export default FormFields
