import { useRef} from "react"
import { DeleteButton } from "./DeleteButton";



export const GifCarrousel = ({ images, setImages }) => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  if (images.length === 0) return null;

  return (
    <div className="carousel-wrapper">
      <div className="carousel-controls">
        <button className="nav-button left" onClick={scrollLeft}>{'<'}</button>

        <div className="gif-carousel-container" ref={carouselRef}>
          {images.map((img) => (
            <div key={img.id} className="gif-card">
              <img src={img.url} alt={img.title} />
              <p>{img.title}</p>
            </div>
          ))}
        </div>

        <button className="nav-button right" onClick={scrollRight}>{'>'}</button>
      </div>

      <DeleteButton setImages={setImages} />
    </div>
  );
};
