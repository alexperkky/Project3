import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import welcomePage from "./pages/welcomePage"

function App() {
  return(
    <Router>
      <Route exact path = "/" component = {welcomePage} />
    </Router>
  )
}

export default App;