import { useEffect, useRef, useState } from "react";

//Custom Hook for export the information of the form

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
        } else {
            setError(null)
        }
    
        if (query.match(/\d/)) {
            setError(`You can't search for a pokemon with a number`)
        } else {
            setError(null)
        }
    
        }, [query])
  
    return {query, setQuery, error}
  }