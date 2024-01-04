import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar';
import '../Styles/movieinfo.css'

export const Movieinfo = () => {
    const loc = useLocation()
    console.log(loc.state);
    
  return (
   <>
   <Navbar/>
   <div className='movieinfo'>
    <div className="title">
        <h1>{loc.state.title || loc.state.Title}</h1>
    </div>
    <div className='infomovie'>
        <div className='image'>
            <img src={loc.state.posterURL || loc.state.Poster} alt="" height={300} width={500}/>
        </div>
        <div className='desc'>

        </div>
    </div>
    <div className="watchbutton">
        <button className='trailer'>Trailer</button>
        <button className='amazon'>Watch on Amazon.com</button>
    </div>
   </div>
   </>
    
  )
}
