import React from 'react';
import { gql, useQuery } from "@apollo/client"
import { Link } from 'react-router-dom';

const GET_MOVIES = gql`
    {
      movies(limit:20, rating:8)
        {
            id
 	        medium_cover_image
        }
    }
`

export default () => {
    const { loading, error, data } = useQuery(GET_MOVIES)

    return (<>
        { loading ?
            <h1>Loading...</h1>
            :
            data.movies.map((movie) => <div key={movie.id}>
                <Link to={`/${movie.id}`}>
                    <img src={movie.medium_cover_image} />
                </Link>
            </div>)}
    </>)
}