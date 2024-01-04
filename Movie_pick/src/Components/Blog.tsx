import React, { useEffect } from 'react'
import { blogData  } from '../dux/Db'
import '../Styles/Blog.css'
import Navbar from './Navbar'

export const Blog = () => {
    return (
        <div className='mainblog'>
            <Navbar/>
            <div className='blogtitle'>
                BLOG
            </div>
            {
                blogData.map((val:any)=>(
                    <div className='blog'>
                        <div className='blogimg'>
                            <img src={val.image} alt="" height={300} />
                        </div>
                        <div className='blogcon'>
                            <h1>{val.type}</h1>
                            <h2>{val.title}</h2>
                            <p>{val.description}</p>
                            <div>
                            <p >{val.comments} comments</p>
                            <p className='blogdate'>{val.date}</p>
                            </div>



                        </div>
                    </div>
                ))
            }
        </div>
    )
}
