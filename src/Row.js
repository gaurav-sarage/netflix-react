import React, {useEffect, useState} from "react";
import axios from "axios";

const base_url = 'https://api.themoviedb.org/3';

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);

    // Fetch data and store it in movies state variable
    useEffect(() => {

    });
}

export default Row;