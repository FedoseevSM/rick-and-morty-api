import { useCallback, useState } from 'react'


export const useBinaryState = () => {
    const [value, setValue] = useState(false)

    const setTrue = useCallback(() => setValue(true), [])
    const setFalse = useCallback(() => setValue(false), [])
    const toggle = useCallback(() => setValue(x => !x), [])

    return [value, setTrue, setFalse, toggle] as const
}