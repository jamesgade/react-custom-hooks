import { useEffect } from 'react'

const useValueLogger = (value) => {

    useEffect(() => {
        console.log(value)
    }, [value])
}

export default useValueLogger;
