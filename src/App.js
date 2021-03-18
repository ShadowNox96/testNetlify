import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Component1 } from './Component1'
import { Component2 } from './Component2'
export const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/path2" component={Component2} />
                <Route path="/" component={Component1} />
            </Switch>
        </BrowserRouter>
    )
}


export default App;