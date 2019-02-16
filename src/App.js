import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import welcomePage from "./pages/welcomePage"
import loginPage from "./pages/loginPage"
import signupPage from "./pages/signupPage"
import noteBoard from "./pages/noteBoard"

function App() {
  return(
    <Router>
      <div>
      <Route exact path = "/" component = {welcomePage} />
      <Route exact path = "/login" component = {loginPage} />
      <Route exact path = "/signup" component = {signupPage} />
      <Route exact path = "/noteboard" component = {noteBoard} />
      </div>
    </Router>
  )
}

export default App;