import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { PageRouter } from '../../website/pageRouter/PageRouter'
import { Navbar } from '../components/navbar/Navbar'
import { NoMatch } from '../pages/404/NoMatch'
import routes from './routes'

export const Router: React.FC = () => {
    const renderPageComponent = (path: string, component: React.ReactNode) => {
        if (path != '/preview') {
            return component
        } else {
            return (
                <PageRouter />
            )
        }
    }

    return (
        <>
            <Navbar routes={routes} />
            <Switch>
                {routes.map(({ path, exact, component }, key) => (
                    <Route key={key} path={path} exact={exact}>
                        {renderPageComponent(path, component)}
                    </Route>
                ))}
                <Route key='404' render={() => <NoMatch />} />
            </Switch>
        </>
    )
}
