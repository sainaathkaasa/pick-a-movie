import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { tempsearchinput } from "./Navbar"
import '../Styles/ErrorDisplay.css'
import { Footer } from './Footer'

export const ErrorDisplay = () => {
    return (
        <>
            <Navbar />
            <div className="errorheading">
                <h1>0 Search Result Found</h1>
                <p>You searched for : "{tempsearchinput}"</p>
                <div className="errormsg" >
                        <p>Sorry,but  nothing matched your search terms. Please try again with different keywords.</p>
                </div>
            </div>
            <Footer/>

            
        </>
    )
}
