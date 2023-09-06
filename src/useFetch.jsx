import axios from "axios"
import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        setLoading(true)
        axios.get(url).then(res => {
            setData(res.data)
        }).catch(err => setError(err))
        .finally(() => setLoading(false))
    } ,[url])

    return {data, loading, error}
}
export default useFetch