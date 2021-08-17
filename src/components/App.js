import React from 'react'
import { BrowserRouter, Route, Switch} from  'react-router-dom'
import Principal from '../pages/Principal.js'
import NewCard from '../pages/NewCard.js'
import NotFound from '../pages/NotFound.js'
import Cocktails from '../pages/Cocktails.js'

const App = () => (
    <BrowserRouter>
            <Switch>
                <Route exact path="/principal" component={Principal}/>
                <Route exact path="/principal/newcard" component={NewCard}/>
                <Route exact path="/principal/marvel" component={Cocktails}/>
                <Route component={NotFound}/>
            </Switch>
    </BrowserRouter>
)


export default App