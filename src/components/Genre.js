import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const Genre = () => {
    const { gnr } = useParams();
    const [movies, setMovies] = useState([]);
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'))
    const navg = useNavigate();
    function genre() {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'a51592f688msh4266b7ec9c109b5p116d72jsn5e07456a2354',
                'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
            }
        };

        fetch(`https://moviesminidatabase.p.rapidapi.com/movie/byGen/${gnr}/`, options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setMovies(response.results)

            })
    }
    function booknow(e) {
        if (loggedUser === null) alert('Please login or signup')
        else navg(`/productpage/${e.target.id}`)
    }
    useEffect(() => {
        genre();
    }, [gnr])


    return (
        <>
            <div className="movies-conth flex space-evenly">
                {movies.map((m, i) => {
                    return (

                        <div className="movie-card border" key={i}>
                            <div className="mi border flex jac">
                                <p>{m.title}</p>
                            </div>
                            <div className="mtitle flex">
                                <p className="mtitlep">{m.title}</p>
                            </div>
                            <div className="booknowbtn-cont flex jac">
                                <button className="booknowbtn bo" id={m.imdb_id} onClick={booknow}>Book Now</button>
                            </div>
                        </div>

                    )
                })}
            </div>
        </>
    )
}
export default Genre;