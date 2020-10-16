import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {

                const res = await fetch(url)
                const json = await res.json();
                setResponse(json)
            }
            catch (e){
                setError(e)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    return {response, loading, error}
}

export default useFetch