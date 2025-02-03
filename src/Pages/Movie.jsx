import React, { useEffect, useState } from 'react';
import  getMovie  from '../services/GetService'
import Card from '../components/ui/Card'

const Movie = () => {
    const [data, setData] = useState([])

    const getMoveieData = async () => {
        try {
            const res = await getMovie()
            console.log(res.data.Search)
            setData(res.data.Search)
        } catch (error) {
            console.log('Error Fetching data : ', error)
        }
    }

    useEffect(() => {
        getMoveieData()
    }, [])

    return (
        <ul className='grid mt-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"'>
            {data && data.map((currElement) => {
                return <Card key={currElement.imdbID}
                    movieData={currElement} />
            })}
        </ul>
    );
};

export default Movie;