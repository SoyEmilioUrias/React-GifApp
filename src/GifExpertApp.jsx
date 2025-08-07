import { useState } from 'react'
import { AddCategory, GifGrid } from './components'


export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch' ]);

  const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory)) return;
        //...(spread operator) expande los elementos de un arreglo.
        setCategories ([ newCategory, ...categories ]);
        // setCategories (cat => [...cat, 'Valorant' ]); otra forma de solucionarlo
        console.log( newCategory );

  };

  console.log(categories);

  return (
    <>  
        {/* Titulo */}
        <h1>Busca tus Gifs</h1>

        {/* Input */}
        <AddCategory 
        //setCategories = { setCategories } 

        onNewCategory = { (value) => onAddCategory(value)}
        />     

        {/* Listado de Gif  */}


        { 
        categories.map( (category) => 

            <GifGrid 
            key = {category} 
            category ={category} />
              
        )
        }
        {/*Gif items */}

    </>
  )
}

export default GifExpertApp