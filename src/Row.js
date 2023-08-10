import React, {useEffect, useState} from "react";
import axios from "axios";

const base_url = "https://image.tmdb.org/t/p/original";

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);

    // Fetch data and store it in movies state variable
    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(fetchUrl);

            setMovies(request.data.results);
        }
        fetchData();

    }, [fetchUrl]);

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">
                {movies.map(movie => {
                    return (
                        <img 
                            key={movie.id}
                            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name}
                        />
                    )
                })}
            </div>
        </div>
    );




}

export default Row;