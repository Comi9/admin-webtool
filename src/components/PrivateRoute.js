import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useUser } from 'reactfire'

function PrivateRoute({ children, ...rest }) {
	const user = useUser()
	
  return <Route {...rest} render={({ location }) => user ? children: <Redirect to={{ pathname: "/", state: { from: location } }} /> } />
}

export default PrivateRoute
