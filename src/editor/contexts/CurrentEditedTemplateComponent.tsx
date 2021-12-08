import React, { createContext, useMemo, useState } from 'react'
import { Compound } from '../types/Compound'

interface CurrentEditedTemplateComponentContextInterface {
    component: Compound | null
    setComponent: React.Dispatch<React.SetStateAction<Compound | null>>
    id: number | null
    setId: React.Dispatch<React.SetStateAction<number | null>>
}

export const CurrentEditedTemplateComponentContext = createContext<CurrentEditedTemplateComponentContextInterface | null>(
    null
)

interface Props {
    children: React.ReactNode
}

export const CurrentEditedTemplateComponentContextProvider: React.FC<Props> = (
    props: Props
) => {
    const [component, setComponent] = useState<Compound | null>(null)
    const [id, setId] = useState<number | null>(null)

    const value = useMemo(() => ({ component, setComponent, id, setId }), [
        component,
        setComponent,
        id,
        setId,
    ])

    return (
        <CurrentEditedTemplateComponentContext.Provider value={value}>
            {props.children}
        </CurrentEditedTemplateComponentContext.Provider>
    )
}