import { Link, useNavigate } from "react-router-dom"
import "../Styles/Navbar.css"
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { SearchedMovies } from "../dux/SearchSlice";
import { MoviesbyGener } from "../dux/GenerSclice";
import { moviebyactor } from "../dux/ActorSlice";


let tempsearchinput = ''
let generselected = ''
let actorselected = ''
const Navbar = () => {

    const [isSearchBarVisible, setSearchBarVisible] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [selectedGeners, setselectedGeners] = useState<string | number>('Top Geners');
    const [searchnames, setsearchNames] = useState('')
    const [geners, setGeners] = useState('')
    const [topGener, setTopGener] = useState(false)
    const handleDropdownToggle = () => {
        setDropdownOpen(!isDropdownOpen);

    };


    const dispath = useDispatch()
    const nav = useNavigate()

    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=ac4ecdb3&s=${searchnames}`).then((response: any) => {
            console.log(response);

            console.log(response.data.Response);
            if (searchnames !== '' && response.data.Response === 'True') {
                dispath(SearchedMovies(response.data.Search))
                nav('/searchedResult')
            }
            else if (searchnames !== '' && response.data.Response !== 'True') {
                nav('/error')
            }
        })
    }, [searchnames])
    useEffect(() => {
        if (inputvalue.current) {
            inputvalue.current.focus()
        }
    }, [isSearchBarVisible])


    const inputvalue = useRef<HTMLInputElement | null>(null)
    tempsearchinput = searchnames

    const handleinputvalue = (e: any) => {
        if (e.key == 'Enter' && inputvalue.current != undefined) {
            setsearchNames(inputvalue.current?.value);
            // console.log(searchnames);
            // setSearchBarVisible(false)

        }
    }

    // const handleOptionSelect = (option: string | number) => {
    //     setselectedGeners(option);
    //     setDropdownOpen(false);
    // };

    const toggleSearchBar = () => {
        setSearchBarVisible(!isSearchBarVisible);
    };

    const handleonblur = () => {
        setSearchBarVisible(false)

    }


    const handleOnclick = (value: string) => {
        axios.get(`https://api.sampleapis.com/movies/${value}`)
            .then((responce) => {
                console.log(responce);
                dispath(MoviesbyGener(responce.data))

            })
            .catch((error) => {
                console.log("error occured");

            })
        generselected = value
        const mainheadings = document.getElementsByClassName('mainheading') as any;
        const maindesc = document.getElementsByClassName('maindesc') as any;
        const start = document.getElementsByClassName('start') as any;
        const searchedgener = document.getElementsByClassName('searchedgener') as any;
        // const singlemovieactor = document.getElementsByClassName('singlemovieactor');
        // const singlemovie = document.getElementsByClassName('singlemovie');

        mainheadings[0].style.display = 'none';
        maindesc[0].style.display = 'none';
        start[0].style.display = 'none';
        searchedgener[0].style.display = 'block'


    }


    const apikey = '5d0cd3b4';
    const handleOnclickactors = (text: string) => {
        axios.get(`http://www.omdbapi.com/?apikey=${apikey}&s=${text}`)

            .then((responce) => {
                console.log(responce.data);
                dispath(moviebyactor(responce.data))
                nav('/Actormovies')
            })
            .catch((error) => {
                console.log("error occured");

            })
        actorselected = text
        // const singlemovie = document.getElementsByClassName('singlemovie');
        // const singlemovieactor = document.getElementsByClassName('singlemovieactor');
        // singlemovie[0].style.display= 'none'
        // singlemovieactor[0].style.display= 'block'


    }
    // let timeoutId: number;

    // const handleMouseEnter = () => {
    //     setTopGener(true);
    //     clearTimeout(timeoutId);
    // };

    // const handleMouseLeave = () => {

    //     timeoutId = setTimeout(() => {
    //         setTopGener(false);
    //     }, 500);
    // };

    const handlelogout = () => {
        nav('/')
    }
    return (
        <>
            <div className="headnav">
                <div className='logo'>
                    <Link to={"/"}>
                        <img src={'https://pickamovieforme.b-cdn.net/wp-content/uploads/2020/09/logo_c.png'} alt="" height={50} width={400} />
                    </Link>
                </div>
                <div className='navcon'>
                    <div><Link to={"/mainpage"}> <h4>MOVIE PICKER</h4> </Link></div>
                    |

                    <div className="dropdown">
                        <div className="selected-option"

                        >TOP GENER <i className="fa-solid fa-angle-down"></i></div>
                        <div className={`options ${topGener ? 'show' : ''}`} >
                            <div className="option" onClick={() => handleOnclick('drama')}>Drama</div>
                            <div className="option" onClick={() => handleOnclick('horror')}>Horror</div>
                            <div className="option" onClick={() => handleOnclick('comedy')}>Comedy</div>
                            <div className="option" onClick={() => handleOnclick('animation')}>Animation</div>
                            <div className="option" onClick={() => handleOnclick('classic')}>Classic</div>
                            <div className="option" onClick={() => handleOnclick('family')}>Family</div>
                            <div className="option" onClick={() => handleOnclick('mystery')}>Mystery</div>
                            {/* <div className="option" onClick={() => handleOnclick('scififantacy')}>Sci-fi</div> */}
                        </div>
                    </div>
                    |

                    <div className="dropdown">
                        <div className="selected-option">TOP ACTORS <i className="fa-solid fa-angle-down"></i></div>
                        <div className="options">
                            <div className="option" onClick={() => handleOnclickactors('tom cruise')}><p>TOMCRUIS</p></div>
                            <div className="option" onClick={() => handleOnclickactors('johnny depp')}>JOHNNYDEPP</div>
                            <div className="option" onClick={() => handleOnclickactors('tom hanks')}>TOMHANKS</div>
                        </div>
                    </div>

                    |
                    <div><Link to={"/blog"}> <h4>BLOG</h4> </Link></div>
                </div>
                <div className="search-bar-container">
                    <div className="search-icon" onClick={toggleSearchBar}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    {isSearchBarVisible && (
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Type your search here"
                            onBlur={handleonblur}
                            ref={inputvalue}
                            onKeyDown={handleinputvalue}
                        />
                    )}
                </div>
                <div className='socialnetwork'>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-youtube"></i>
                </div>
                <div className="logout">
                    <button onClick={handlelogout} className="logoutbut">LOGOUT</button>
                </div>
            </div>
        </>
    )
}
export { tempsearchinput }
export { generselected }
export { actorselected }
export default Navbar
