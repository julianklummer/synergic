import React, { StrictMode } from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { App } from './app/App'
import { getLCP, getFID, getCLS } from 'web-vitals'
import { HelmetProvider } from 'react-helmet-async'

hydrate(
    <StrictMode>
        <HelmetProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </HelmetProvider>
    </StrictMode>,
    document.getElementById('app')
)

getCLS(console.log)
getFID(console.log)
getLCP(console.log)