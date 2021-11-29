import React, { StrictMode } from 'react'
import { hydrate } from 'react-dom'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import { getCLS, getFID, getLCP } from 'web-vitals'
import { App } from './app/App'

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