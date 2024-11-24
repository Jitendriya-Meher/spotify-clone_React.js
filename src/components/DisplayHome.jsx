import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import AlbumItems from './AlbumItems'
import SongItems from './SongItems'

const DisplayHome = () => {
  return (
    <>
        <Navbar></Navbar>

        <div className=" mb-4">

            <h1 className=' my-5 font-bold text-2xl'>
                Feature Charts
            </h1>

            <div className=" flex overflow-auto ">

                {
                    albumsData.map((item,index) => (
                        <AlbumItems
                        name={item.name}
                        image={item.image}
                        key={index}
                        desc={item.desc}
                        id={item.id}
                        ></AlbumItems>
                    ))
                }

            </div>

        </div>

        <div className=" mb-4">

            <h1 className=' my-5 font-bold text-2xl'>
                Today's biggest hits
            </h1>

            <div className=" flex overflow-auto ">

                {
                    songsData.map((item,index) => (
                        <SongItems
                        name={item.name}
                        image={item.image}
                        key={index}
                        desc={item.desc}
                        id={item.id}
                        ></SongItems>
                    ))
                }

            </div>

        </div>

    </>
  )
}

export default DisplayHome