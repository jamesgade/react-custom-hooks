import { useState, useEffect } from 'react'

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => getValueFromLocalStorage(key, initialValue))

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}

const getValueFromLocalStorage = (key, initialValue) => {

    const valueFromLocalStorage = JSON.parse(localStorage.getItem(key))

    if(valueFromLocalStorage) return valueFromLocalStorage
    if(initialValue instanceof Function) return initialValue()
    return initialValue
}

export default useLocalStorage
