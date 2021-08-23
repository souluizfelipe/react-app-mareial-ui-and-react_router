import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Home from './pages/Home'
import Customers from './pages/Customers'
import TemplateDefault from './templates/Default'

function App() {
  return (
    <TemplateDefault>
      <Router>
        <Switch>
          <Route path='/customers' >
            <Customers />
          </Route>
          <Route path='/' >
            <Home />
          </Route>
        </Switch>
      </Router>
    </TemplateDefault>
  )
}

export default App;
