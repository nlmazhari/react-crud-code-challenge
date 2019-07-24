import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Home from './containers/Home'
import Dinosaurs from './containers/Dinosaurs'
import SingleDinosaur from './containers/SingleDino'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" render={() => (
          <Home>
            <Route exact path="/home/dinosaurs" component={Dinosaurs} />
            <Route exact path="/home/dinosaur/:id" component={SingleDinosaur} />
          </Home>
        )} />
        {/* also we can have a 404 page to route none matches urls there: */}
        <Route exact path="*" component={Dinosaurs} />
      </Switch>
    </Router>
  )
}
export default App