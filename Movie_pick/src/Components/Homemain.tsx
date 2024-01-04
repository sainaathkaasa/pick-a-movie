import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import '../Styles/Homemain.css'
import { useSelector } from 'react-redux'
import { getmoviebyGener } from '../dux/GenerSclice'
import { generselected } from './Navbar'
import { getmoviebyactor } from '../dux/ActorSlice'


export const Homemain = () => {

    const item = useSelector(getmoviebyGener)
    let res = false
    
    


    return (
        <div className='mainhomecon'>
            <div className='mainheading'>
                <h1>MOVIE RECOMMENDATION ENGINE</h1>
            </div>
            <div className='maindesc'>
                <p>You can’t decide between thousands of movies available for streaming?
                    Answer 6 questions and let us do the work!</p>
            </div>
            <div className='start'>
                <Link to={'/howareyou'}>
                    <button>Start Now</button>
                </Link>
            </div>
            <div className="searchedgener" style={{ display: 'none' }}>
                <h1>{`THE BEST ${generselected} MOVIES`}</h1>
                <h2>Can’t decide? Use the <Link to={'/'}>Movie Picker!</Link></h2>
            </div>
            <div className='space'>
                {
                 item.map((val: any) => (
                        <div className='singlemovie'>
                            <div className='movieposter'>
                                <Link to={'/movieinfo'} state={val}>
                                    <img src={val.posterURL} alt="" height={250} width={200} />
                                </Link>
                            </div>
                            <div className='movieCon'>
                                <h4 className='singlemoviename'>{val.title}</h4>
                                {/* `https://www.omdbapi.com/?i=${imdbID}&apikey=YOUR_API_KEY` */}
                                {/* http://www.omdbapi.com/?apikey=${apikey}&s=${text} */}
                                {/* const apikey='5d0cd3b4';   */}
                            </div>
                        </div>

                    ))
                }

                

            </div>

        </div>
    )
}
