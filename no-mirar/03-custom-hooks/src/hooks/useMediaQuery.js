import { useEffect, useState } from 'react'

function useMediaQuery(query) {
    const [matches, setMatches] = useState(() => window.matchMedia(query).matches)

    useEffect(() => {
        const matchMedia = window.matchMedia(query)

        const handleChange = () => {
            const hasMatches = window.matchMedia(query).matches
            setMatches(hasMatches)
        }

        handleChange()
        matchMedia.addEventListener('change', handleChange)

        return () => {
            matchMedia.removeEventListener('change', handleChange)
        }
    }, [query])

    return matches
}

export default useMediaQuery