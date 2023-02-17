import { useState, useEffect } from 'react'

const useFetch = (url = '', options = null) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        let isMounted = true;

        setLoading(true)

        fetch(url, options)
            .then(response => response.json())
            .then(apiData => {
                if (isMounted) {
                    setData(apiData)
                    setError(null)
                }
            })
            .catch(error => {
                if (isMounted) {
                    setError(error)
                    setData(null)
                }
            })
            .finally(() => isMounted && setLoading(false))

        return () => (isMounted = false)
    }, [url, options])

    return { data, loading, error }
}

export default useFetch;
