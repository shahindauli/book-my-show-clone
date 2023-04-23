import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Globalcontext } from "./GlobalContext";
const Header = () => {
  const gc = useContext(Globalcontext);
  const { loggedInUser, setLoggedInUser } = gc;
  const navg = useNavigate();
  const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
  const city = localStorage.getItem('city');


  function logedUser() {
    if (localStorage.getItem("loggedUser") !== null) {
      setLoggedInUser(true)
    }
    else {
      setLoggedInUser(false)
    }
  }
  function signUp() {
    navg('/signup')
  }

  function logIn() {
    navg('/login')
  }
  function logout() {
    setLoggedInUser(false)
    localStorage.removeItem('loggedUser')
    navg('/')
  }

  function searchMovie(e) {
    if (e.keyCode === 13) {
      navg(`/search/${e.target.value}`)
    }

  }
  function myorder() {

  }

  useEffect(() => {
    logedUser();
  })



  return (
    <>
      <div className="header-cont flex">
        <div className="logo-cont flex ac flex-end-j" onClick={() => navg('/')}>
          <p style={{ fontSize: '25px', fontStretch: 'extra-condensed' }}>book <span style={{ color: 'red' }}>my</span> show</p>
        </div>
        <div className="input-cont flex jac">
          <input className="input-search-bar bo " onKeyDown={searchMovie} type="text" placeholder="Search for Movies, Events,Plays, Sports and Activities" />
        </div>
        <div className="cslu-cont flex ac space-between">
          <p style={{ width: '120px' }}>{city !== null && city.charAt(0).toUpperCase()}{city !== null && city.slice(1)}</p>
          <input type="text" placeholder="Select City" onKeyDown={e => { if (e.keyCode === 13) { localStorage.setItem('city', e.target.value); e.target.value = ''; navg('/') } }} />
          {loggedInUser ? <p>Hi, {loggedUser.email.split('@')[0]}</p> : <button className="bo" onClick={signUp}>Sign Up</button>}
          {loggedInUser ? <button onClick={logout} className="bo">Log Out</button> : <button className="bo" onClick={logIn}>Log In</button>}
        </div>
      </div>
    </>
  )
}
export default Header;