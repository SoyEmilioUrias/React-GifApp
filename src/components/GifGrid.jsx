
import { useState, useEffect } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifCarrousel } from "./GifCarrousel";


export const GifGrid = ({ category }) => {
  const { images: fetchedImages, isLoading } = useFetchGifs(category);
  const [images, setImages] = useState([]);

  // sincronizar imágenes al recibirlas desde el fetch
  useEffect(() => {
    setImages(fetchedImages);
  }, [fetchedImages]);

  //Si no hay imágenes, no renderizar nada
  if (!isLoading && images.length === 0) return null;

  return (
    <>
      {images.length > 0 && <h3>{category}</h3>}
      {isLoading && <h2>Cargando...</h2>}
      <GifCarrousel images={images} setImages={setImages} />
    </>
  );
};


