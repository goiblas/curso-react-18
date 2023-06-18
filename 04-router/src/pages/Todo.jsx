import { useParams, useLocation, useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

export default function Todo() {
    const { id } = useParams();
    const { state } = useLocation();
    const todo = useLoaderData();

    useEffect(() => {
       console.log(todo);
    }, [todo]);

    return (
        <>
            <Helmet>
                <title>To Do: {id}</title>
            </Helmet>

            <h1>To Do: {id}</h1>
            <p>{state?.title}</p>
        </>
    );
}