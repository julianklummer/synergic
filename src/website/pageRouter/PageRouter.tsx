import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Route, Switch, useLocation, useRouteMatch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { LoadingBackdrop } from '../../app/components/atoms/LoadingBackdrop/LoadingBackdrop'
import { contentApiUrl } from '../../app/services/contentApiUrl'
import { fetchApi } from '../../app/services/fetchApi'
import { PageData } from '../../app/types/PageData'
import { Page } from '../pageRender/Page'
import { PageRouterNavigation } from './PageRouterNavigation'

export const PageRouter: React.FC = () => {
    const [pages, setPages] = useState<PageData[]>([])
    const [loading, setLoading] = useState(true)
    const { path, url } = useRouteMatch()
    const location = useLocation()
    const [pageName, setPageName] = React.useState('')

    const loadData = async () => {
        const response = await fetchApi(`${contentApiUrl}/pages`)
        setPages(response.data)
        setLoading(false)
    }

    const loadPageName = () => {
        pages.forEach((page) => {
            console.log(page.route)
            if (`${url}/${page.route}` === location.pathname) {
                setPageName(page.name)
            }
        })
    }

    useEffect(() => {
        loadData()
        loadPageName()
    }, [])

    return (
        
        <BrowserRouter>
        {loading && <LoadingBackdrop />}
            <PageRouterNavigation 
                pageName={pageName}
                setPageName= {setPageName}
                pages={pages}
                url={url}
            />
            <Switch>
                {pages.map((page, key) => (
                    <Route key={key} path={`${path}/${page.route}`} exact>
                        <Helmet>
                            <title>{page.title}</title>
                            <meta
                                name='description'
                                content='This is the Page Editor'
                            />
                        </Helmet>
                        <Page page={page} />
                    </Route>
                ))}
            </Switch>
        </BrowserRouter>
    )
}
