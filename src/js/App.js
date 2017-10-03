import React from 'react'
import { Route, Switch } from 'react-router-dom'
import routeOptions from './Routes'

const App = () => {
  let routes = routeOptions.routes.map(({path, component, exact}, i) =>
    <Route key={i} exact={exact} path={path} component={component} />
  )
  return(
    <Switch>
      {routes}
    </Switch>
  )
}

export default App
