//import './styles.css'

export const DeleteButton = ({ setImages, setIsDeleted }) => {
  const handleDeleteAll = () => {
    setImages([]);        // Borra los GIFs
    setIsDeleted(true);   // Oculta todo el carrusel
  };

 return (
    <button
      type="button"
      className="delete-button"
      onClick={handleDeleteAll}
      title="Eliminar todo el carrusel"
    >
      <span className="button__text">Delete</span>
  <span className="button__icon">
    
    <svg
      className="svg"
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      viewBox="0 0 24 24"
      width="20"
    >
      <path
        fill="currentColor"
        d="M6 19a2 2 0 002 2h8a2 2 0 002-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 
        1H5v2h14V4z"
      />
    </svg>
  </span>
    </button>
  );
};