import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Left = () => {
  const [genre, setGenre] = useState([]);
  const navg = useNavigate()


  function callApi() {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a51592f688msh4266b7ec9c109b5p116d72jsn5e07456a2354',
        'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
      }
    };

    fetch('https://moviesminidatabase.p.rapidapi.com/genres/', options)
      .then(response => response.json())
      .then(response => {
        setGenre(response.results)
      })
  }

  function filterGenre(e) {
    navg(`/genre/${e.target.innerText}`)
  }

  useEffect(() => {
    callApi()
  }, [])

  return (
    <>
      <div className="left-cont">
        <h1>Genre</h1>
        {genre.map((m, i) => {
          return <div className="genre-cont" id={i} key={i} onClick={filterGenre} >{m.genre}</div>
        })}
      </div>
    </>
  )
}
export default Left;