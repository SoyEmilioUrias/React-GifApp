import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category) => {
 
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoding] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoding(false);
    }

    useEffect(() => {
      getImages();
      }, []);

    return {

        images,
        isLoading
    }
}

