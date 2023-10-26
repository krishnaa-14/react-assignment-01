import React, { useEffect, useState, useRef, useContext } from 'react'
import config from '../config.js'
import { ActiveCustomerContext } from '../App.jsx';


export default function CustomerDisplay() {
    const { activeCustomer } = useContext(ActiveCustomerContext);
    const pageNumber = useRef(1);
    const [images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setisLoading(true);
            fetchImages();
        }, 10 * 1000);

        return () => {
            clearInterval(interval);
        }
    }, [])

    function fetchImages() {
        fetch(`https://api.pexels.com/v1/curated?per_page=9&page=${pageNumber.current}`, {
            method: "GET",
            headers: {
                "Authorization": config.PEXELS_API_KEY
            }
        })
        .then(res => res.json())
        .then(data => {
            pageNumber.current++;
            const photos = data.photos;
            const newImages = photos.map((photo) => photo.src.original)
            setImages(newImages);
            setisLoading(false);
        })
    }
    return (
        <div className='w-3/4 flex flex-col items-center justify-center h-full bg-gray-100 px-14 gap-6 overflow-auto'>
            <span className='font-semibold text-lg'>{activeCustomer.name} details here</span>
            <span className='font-light w-2/3 text-center'>{activeCustomer.title}</span>
            {isLoading === true ? <h1> Loading .....</h1> : <div className='grid grid-rows-3 grid-cols-3 gap-4'>
                {
                    images.map((image, index) => (
                        <img className='w-28 h-28 rounded-xl' src={image} key={index}/>
                    ))
                }
            </div>}
        </div>
    )
}
