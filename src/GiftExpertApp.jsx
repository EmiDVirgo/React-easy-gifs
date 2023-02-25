import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components';



export const GiftExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);
    // console.log(Categories);

    const onAddCategory = (newCategory) => {

      if (categories.includes(newCategory) ) return;
      console.log(newCategory);
      // Categories.push(newCategory); No funciona asi en react
      setCategories([ newCategory, ...categories ]);
    }


  return (
    <>
      
        <h1>GiftExpertApp</h1>

      <AddCategory 
        onNewCategory={ value => onAddCategory(value) } 
        />

      {/* <button onClick={ onAddCategory }>Agregar</button> */}

      { 
        categories.map( (category) => (
            <GifGrid 
              key={ category }
              category={ category }/>    
        ))
      }
      
                
    </>
  )
}