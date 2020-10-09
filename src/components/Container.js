import React from "react"
import PropTypes from "prop-types"

function Container({ children }) {
  return (
    <div className="uk-height-viewport uk-container-large uk-padding-small uk-margin-auto-right uk-margin-auto-left">
      {children}
    </div>
  )
}

Container.propTypes = { children: PropTypes.node.isRequired }

export default Container
