import { gql, useQuery } from "@apollo/client"
import React from 'react';
import { useParams } from 'react-router';

const GET_MOVIE = gql`
    query getMovie($id: Int!){
        movie(id: $id){
            id
            title
            medium_cover_image
            description_intro
        }
        
    }
    
`


export default () => {
    let { id } = useParams()
    id = parseInt(id)
    const { loading, error, data } = useQuery(GET_MOVIE, {
        variables: { id }
    })
    console.log(loading, data);

    return (<>
        {loading && <div>Loading...</div>}
        {!loading && data.movie && <>
            <div>Movie Id: {id}</div>
            <div>Movie title: {data.movie.title}</div>
            <div>Movie des: {data.movie.description_intro}</div>
            <img src={data.movie.medium_cover_image} />
        </>}
    </>)
}