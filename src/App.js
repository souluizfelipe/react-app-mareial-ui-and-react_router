import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Home from './pages/Home'
import Customers from './pages/Customers'
import TemplateDefault from './templates/Default'
import TemplatePage from './templates/Page.js'

function App() {
  return (
    <TemplateDefault>
      <Router>
        <Switch>
          <Route path='/customers' >
            <TemplatePage title="Customers" Component={Customers} />
          </Route>
          <Route path='/' >
            <TemplatePage title="Home is here!" Component={Home} />
          </Route>
        </Switch>
      </Router>
    </TemplateDefault>
  )
}

export default App;
