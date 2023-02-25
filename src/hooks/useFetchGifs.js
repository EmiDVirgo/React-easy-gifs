import React, { useEffect, useState } from 'react'
import { GifGrid } from '../components/GifGrid';
import { getGifs } from '../helpers/GetGif'

export const useFetchGifs = ( category) => {

   const [images, setImages] = useState([]);
   const [isLoading, setIsLoading] = useState( true )



 const getImages = async() => {
  const newImages = await getGifs( category );
  setImages(newImages);
  setIsLoading(false);
 }
  
useEffect( () => {
 getImages();

}, [ ]);



  return {
      images,
      isLoading
    }
}
