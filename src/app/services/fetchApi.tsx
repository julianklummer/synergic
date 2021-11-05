import { useState, useEffect } from 'react'

interface fetchApi {
    (
        url: string,
        method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | null,
        body?: object | null
    ): any
}

interface fetchOptions {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
    mode: 'cors'
    cache: 'no-cache'
    credentials: 'same-origin'
    headers?: HeadersInit | undefined
    body?: string
}

export const fetchApi: fetchApi = async (url, method, body) => {

    const options: fetchOptions = {
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
    }

    if (method) {
        Object.assign(options, {
            method: method,
        })
    }

    if (body) {
        Object.assign(options, {
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
    }

    let loading = true
        const response = await fetch(url, options)
        const data = await response.json()
        console.log(data)
        loading = false

    return { data, loading }
}
