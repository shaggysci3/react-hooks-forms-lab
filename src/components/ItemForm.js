import React, { useState } from "react";
import { v4 as uuid } from "uuid";


function ItemForm({onItemFormSubmit,}) {
  const [name,setName] = useState("")
  const [category,setCategory] = useState("Produce")
   function onSubmit(e){
    e.preventDefault()
    let newItem = {
      id: uuid(),
      name,
      category, 
    }
    onItemFormSubmit(newItem)
 
  }
  
  function handleCategory(e){
    setCategory(e.target.value)
  }
  
  function handleName(e){
    
   setName(e.target.value)
   
    
  }


  return (
    <form className="NewItem" onSubmit={onSubmit} >
      <label>
        Name:
        <input type="text" name="name" value ={name} onChange={handleName} />
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={handleCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
