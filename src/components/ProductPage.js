import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductPage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({})
    const [genm, setgen] = useState([])
    const [active, setActive] = useState('')
    var rd = [];
    const [dateLength, setDateLength] = useState(rd)
    const [status, setStatus] = useState(true)
    const [selectedDate, setSelectedDate] = useState(rd[0])

    const navg = useNavigate();

    function fetchProductById() {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'a51592f688msh4266b7ec9c109b5p116d72jsn5e07456a2354',
                'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
            }
        };

        fetch(`https://moviesminidatabase.p.rapidapi.com/movie/id/${id}/`, options)
            .then(response => response.json())
            .then(response => {
                setMovie(response.results)
                setgen(response.results.gen)
            })

    }

    var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    var dw = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    function setRuningDate() {
        for (let i = 0; i < 6; i++) {
            const d = new Date();
            d.setDate(d.getDate() + i)
            rd[i] = d;
        }
    }
    function gotoseatlayout(e) {
        navg(`/seatlayout/${e.target.parentNode.previousElementSibling.innerText}/${e.target.innerText}/${selectedDate}/${movie.title}`)
    }
    function intload() {
        setSelectedDate(rd[0])
    }

    useEffect(() => {
        fetchProductById();
        setRuningDate()
        intload()
    }, [])

    return (
        <>

            <div className="moviebook-cont">
                <div className="movie-details-cont flex border">
                    <div className="movie-image-title-cont">
                        <div className="image flex jac"><img className="mi2" src={movie.banner} alt='mg' /></div>
                        <div style={{ paddingTop: '20px', paddingBottom: '20px', textAlign: 'center', fontWeight: 'bold', width: '100%' }}><p>{movie.title}</p></div>
                    </div>
                    <div className="genre flex jac">
                        {genm.map((m, i) => {
                            return <p key={i}>{m.genre}&nbsp;&nbsp;</p>
                        })}
                    </div>
                    <div className="genre flex jac">
                        <p>Rating : {movie.rating}/10</p>&nbsp;&nbsp;&nbsp;
                        <p>Duration : {Math.floor(movie.movie_length / 60)}h : {movie.movie_length % 60}m</p>&nbsp;&nbsp;&nbsp;
                        <p>Release : {movie.release}</p>
                    </div>
                </div>
                <br></br>
                <div className="cinema-time-and-seat-cont">
                    <div className="date-cont flex">
                        {dateLength.map((m, i) => {
                            if (i == 0) {
                                return <div id={m} key={i} onClick={e => {
                                    setActive(e.target.id)
                                    setStatus(true)
                                    setSelectedDate(m)
                                }} className={active == m || status ? 'border active' : 'border'} style={{ width: '50px', padding: '5px', textAlign: 'center' }}>
                                    {dw[m.getDay()]}<br></br>
                                    {m.getDate()}<br></br>
                                    {month[m.getMonth()]}
                                </div>
                            }
                            else {
                                return <div id={m} key={i} onClick={e => {
                                    setActive(e.target.id)
                                    setStatus(false)
                                    setSelectedDate(m)
                                }} className={active == m ? 'border active' : 'border'} style={{ width: '50px', padding: '5px', textAlign: 'center' }}>
                                    {dw[m.getDay()]}<br></br>
                                    {m.getDate()}<br></br>
                                    {month[m.getMonth()]}
                                </div>
                            }
                        })}
                    </div>
                    <br /><br />
                    <h3 id='1'>Raj Cinema : </h3>
                    <div id='1' className="time-cont flex">
                        <button onClick={gotoseatlayout}>09:00 AM</button>
                        <button onClick={gotoseatlayout}>12:00 PM</button>
                        <button onClick={gotoseatlayout}>03:00 PM</button>
                        <button onClick={gotoseatlayout}>06:00 PM</button>
                    </div>
                    <h3 id='2'>Raj Hansh Cinema : </h3>
                    <div id='2' className="time-cont flex">
                        <button onClick={gotoseatlayout}>09:00 AM</button>
                        <button onClick={gotoseatlayout}>12:00 PM</button>
                        <button onClick={gotoseatlayout}>03:00 PM</button>
                        <button onClick={gotoseatlayout}>06:00 PM</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default ProductPage;