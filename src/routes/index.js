import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from '../pages/Home'
import Redirect from '../pages/Redirect'
import Status from '../pages/Status'
import NotFound from '../pages/NotFound'

function Routes (){
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/:code' exact component={Redirect} />
        <Route path='/:code/status' exact component={Status} />
        <Route path='/*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}
export default Routes