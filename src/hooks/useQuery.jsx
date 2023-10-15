import { useEffect, useRef, useState } from "react";

export function useQuery() {
    const [query, setQuery] = useState('')
    const [error, setError] = useState(null)
    const isFirstInput = useRef(true)
  
    useEffect(() => {
        if (isFirstInput.current) {
            isFirstInput.current = query === ''
            return
        }

        if ( query === '') {
            setError('No pokemon entered')
            return
        }
    
        if (query.match(/^\d+$/)) {
            setError(`You can't search for a pokemon with a number`)
        }
    
        setError(null)
        }, [query])
  
    return {query, setQuery, error}
  }