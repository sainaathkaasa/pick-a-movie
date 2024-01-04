import { useSelector } from "react-redux"
import { getSearchedMovies } from "../dux/SearchSlice"
import '../Styles/SearchedItemdisplay.css'
import Navbar from "./Navbar"
import { tempsearchinput } from "./Navbar"
import { Link } from "react-router-dom"
import { useEffect } from "react"


export const SearchedItemdisplay = () => {
    const items = useSelector(getSearchedMovies)
    console.log((items));
    // console.log(
    //     Object.entries(items).map((val: any) => (
    //         <p key={val[0].Title}>{val[0].Title}</p>

    //       ))
    // );

    // Object.entries(items).map((val: any) => (
    //     <p key={val[0].Title}>{val[0].Title}</p>

    //   ))
    // items.map((val:any)=>{
    //     console.log(val.imdbID);

    // })
    return (

        <>
            <Navbar />
            <div className="searchheading">
                <h1>{items.length} Search Result Found</h1>
                <p>You searched for : "{tempsearchinput}"</p>
            </div>

            {
                <div className="searcheddisplay" >

                    {
                        items.map((val: any) => (
                            <div className="moviedetail">
                                <div className="Poster">
                                    <Link to={"/movieinfo"} state={val}>
                                        <img src={val.Poster} alt="" height={350} width={200} />
                                    </Link>
                                </div>
                                <div className="moviecon">
                                    <h3>{val.Title}</h3>
                                    <p>Year : {val.Year}</p>
                                    <p><Link to={"/movieinfo"} state={val}>Continue Reading</Link></p>
                                </div>

                            </div>

                        ))
                    }
                </div>

            }
        </>
    )
}
