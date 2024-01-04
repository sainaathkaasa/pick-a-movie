import React from 'react'
import { useSelector } from 'react-redux';
import { getmoviebyactor } from '../dux/ActorSlice';
import { Link } from 'react-router-dom';
import '../Styles/Actormovie.css'
import Navbar, { actorselected } from './Navbar';
import { Footer } from './Footer';

const Actormovies = () => {

    const a = useSelector(getmoviebyactor)
    const actoritem = a.Search
    let ab = false
    if (actoritem !== undefined) {
        ab = true
    }
    return (

        <div className='spaces'>

            <Navbar />
            <div className="searchedgener" >
                <h1>{`THE BEST ${actorselected} MOVIES`}</h1>
                <h2>Can’t decide? Use the <Link to={'/'}>Movie Picker!</Link></h2>
            </div>
            <div className='spaces'>


                {

                    ab && actoritem.map((val: any) => (

                        <div className='singlemovieactor'>

                            <div className='movieposter'>
                                <Link to={'/movieinfo'} state={val}>
                                    <img src={val.Poster} alt="" height={250} width={200} />
                                </Link>
                            </div>
                            <div className='movieCon'>
                                <h4 className='singlemoviename'>{val.Title}</h4>

                            </div>
                        </div>

                    ))

                }

            </div>
            <Footer/>
        </div>

    )
}

export default Actormovies
