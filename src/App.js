import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Home from './pages/Home'
import CustomersList from './pages/CustomersList'
import CustomersRegister from './pages/CustomersRegister'
import TemplateDefault from './templates/Default'
import TemplatePage from './templates/Page.js'

function App() {
  return (
    <Router>
      <TemplateDefault>
        <Switch>
          <Route path='/customers/add' >
            <TemplatePage title="Register Customers" Component={CustomersRegister} />
          </Route>
          <Route path='/customers' >
            <TemplatePage title="Customers List" Component={CustomersList} />
          </Route>
          <Route path='/' >
            <TemplatePage title="Home is here!" Component={Home} />
          </Route>
        </Switch>
      </TemplateDefault>
    </Router>
  )
}

export default App;
