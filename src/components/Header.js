import React from "react"
import { useAuth, useUser } from "reactfire"
import firebase from "firebase/app"
import { NavLink } from "react-router-dom"
import { FITS_LOGO } from "../assets/graphics"

function Header() {
  const auth = useAuth()
  const user = useUser()

  const navigationMenu = () => {
    if (user) {
      return (
        <ul className="uk-navbar-nav">
          <li>
            <NavLink to="/livestreams">Livestreams</NavLink>
          </li>
          <li>
            <NavLink to="/events">Events</NavLink>
          </li>
          <li>
            <NavLink to="/articles">Articles</NavLink>
          </li>
          <li>
            <NavLink to="/program">Program</NavLink>
          </li>
        </ul>
      )
    }
  }

  const authStateButton = () => {
    if (!user) {
      return (
        <button
          className="uk-button uk-button-text"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          Sign in <span uk-icon="icon: sign-in"></span>
        </button>
      )
    }
    return (
      <>
        {user.displayName}{" "}
        <button
          className="uk-button uk-button-text"
          onClick={() => auth.signOut()}
        >
          <span uk-icon="icon: sign-out"></span>
        </button>
      </>
    )
  }

  return (
    <div data-uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
      <div className="uk-background-secondary uk-light">
        <div className="uk-container-large uk-margin-auto-right uk-margin-auto-left">
          <nav
            className="uk-navbar-container uk-navbar-transparent"
            data-uk-navbar
          >
            <a className="uk-navbar-item uk-logo application-logo" href="/">
              {FITS_LOGO()}
            </a>
            <div className="uk-navbar-left">{navigationMenu()}</div>
            <div className="uk-navbar-right uk-padding-small">
              <ul className="uk-navbar-nav">
                <li>{authStateButton()}</li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header
