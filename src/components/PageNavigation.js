import React from "react"
import { Link } from "react-router-dom"

function PageNavigation({
  title = "Page",
  count,
  to = "/",
  search = false,
  icon = "plus-circle",
}) {
  return (
    <>
      <div className="uk-flex uk-flex-between">
        <h2 className="uk-heading-bullet">
          {title} {count > 0 && <span className="uk-badge">{count}</span>}
        </h2>
        <div>
          {/* {search && <form className="uk-search uk-search-default uk-margin-right">
						<span data-uk-search-icon></span>
						<input className="uk-search-input" type="search" placeholder="Search..." />
					</form>} */}
          <Link to={to} uk-icon={`icon: ${icon}; ratio: 2`} />
        </div>
      </div>
    </>
  )
}

export default PageNavigation
