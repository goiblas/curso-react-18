import { useState, useEffect } from "react";

function getPosts() {
    return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
}
export default function usePosts() {
    const [isLoading, setIsLoading] = useState(true)
    const [posts, setPosts] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        getPosts().then(posts => {
            setPosts(posts)
        }).catch(error => {
            setError(error)
        }).finally(() => {
            setIsLoading(false)
        })
    }, [])

    return { isLoading, posts, error }
}