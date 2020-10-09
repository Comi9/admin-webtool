import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { firebaseConfig } from "./firebaseConfig"
import { FirebaseAppProvider, SuspenseWithPerf } from "reactfire"
import ApplicationLoader from "./components/ApplicationLoader"
import Header from "./components/Header"
import PrivateRoute from "./components/PrivateRoute"
import Container from "./components/Container"
import Dashboard from "./pages/Dashboard"
import Livestreams from "./pages/Livestreams"
import CreateLivestream from "./pages/CreateLivestream"
import EditLivestream from "./pages/EditLivestream"
import Events from "./pages/Events"
import CreateEvent from "./pages/CreateEvent"
import EditEvent from "./pages/EditEvent"
import Articles from "./pages/Articles"
import CreateArticle from "./pages/CreateArticle"
import EditArticle from "./pages/EditArticle"
import Program from "./pages/Program"
import "react-quill/dist/quill.snow.css"
import "cropperjs/dist/cropper.css"

function Application() {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <SuspenseWithPerf fallback={<ApplicationLoader />}>
        <Router>
          <Header />
          <Container>
            <div className="application">
              <Switch>
                <Route exact path="/">
                  <Dashboard />
                </Route>
                <PrivateRoute exact path="/livestreams">
                  <Livestreams />
                </PrivateRoute>
                <PrivateRoute exact path="/livestreams/create">
                  <CreateLivestream />
                </PrivateRoute>
                <PrivateRoute exact path="/livestreams/edit/:documentID">
                  <EditLivestream />
                </PrivateRoute>
                <PrivateRoute exact path="/events">
                  <Events />
                </PrivateRoute>
                <PrivateRoute exact path="/events/create">
                  <CreateEvent />
                </PrivateRoute>
                <PrivateRoute exact path="/events/edit/:documentID">
                  <EditEvent />
                </PrivateRoute>
                <PrivateRoute exact path="/articles">
                  <Articles />
                </PrivateRoute>
                <PrivateRoute exact path="/articles/create">
                  <CreateArticle />
                </PrivateRoute>
                <PrivateRoute exact path="/articles/edit/:documentID">
                  <EditArticle />
                </PrivateRoute>
                <PrivateRoute exact path="/program">
                  <Program />
                </PrivateRoute>
              </Switch>
            </div>
          </Container>
        </Router>
      </SuspenseWithPerf>
    </FirebaseAppProvider>
  )
}

export default Application
