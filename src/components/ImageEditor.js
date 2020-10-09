import React, { useEffect, useState, useRef } from 'react'
import { useDropzone } from 'react-dropzone'
import Cropper from 'react-cropper'
import 'cropperjs/dist/cropper.css'
import { isEmpty } from 'lodash'

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#222',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
}

const ImageEditor = () => {
  const [src, setSrc] = useState('')
  const [cropResult, setCropResult] = useState('')
  const cropper = useRef(null)
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setPicture(acceptedFiles[0])
      setFiles(acceptedFiles.map(file => Object.assign(file, { preview: URL.createObjectURL(file) })));
    }
  });

  const setPicture = file => {
    const reader = new FileReader()
    reader.onload = () => setSrc(reader.result)
    reader.readAsDataURL(file)
  }
  
  const thumbs = files.map(file => (
    <li className="uk-active" key={file.name}>
      <a onClick={() => setPicture(file)}><img src={file.preview} width="100" alt="tile" /></a>
    </li>
  ));

  useEffect(() => () => {
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  const cropImage = (e) => {
    e.preventDefault()
    if (typeof cropper.current.getCroppedCanvas() === 'undefined') return
    setCropResult(cropper.current.getCroppedCanvas({ width: 1280 }).toDataURL('image/jpeg', 0.8))
  }

  return (
    <>

      <div className="uk-padding">
        <section className="container">
          <div style={baseStyle} {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        </section>
        <div className="uk-flex uk-margin-small-top uk-flex-between">
          <ul className="uk-thumbnav">{thumbs}</ul>
          {!isEmpty(files) && <button className="uk-button uk-button-default" onClick={() => setFiles([])}>Clear</button>}
        </div>
      </div>

      {!isEmpty(files) && <>
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


        <button  className="uk-button uk-button-primary uk-margin uk-width-1-1" onClick={cropImage}>
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
      </>}
    </>
  )
}

export default ImageEditor