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
            setError('No Pokémon entered')
            return
        } else {
            setError(null)
        }

        if (query.match(/\d/)) {
            setError(`Cannot search for a Pokémon with a number`)
        } else if (query.match(/[\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/)) {
            setError(`Cannot search for a Pokémon with a special character`)
        } else {
            setError(null)
        }

        }, [query])

    return {query, setQuery, error}
}