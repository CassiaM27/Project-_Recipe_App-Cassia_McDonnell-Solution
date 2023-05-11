import React from "react";

function RecipeDisplay({ recipe, deleteRecipe }) {

  return (
    <tr className="recipe">
      <td className="name"><p>{recipe.name}</p></td>
      <td className="cuisine"><p>{recipe.cuisine}</p></td>
      <td className="photo"><img src={recipe.photo} /></td>
      <td className="ingredients content_td"><p>{recipe.ingredients}</p></td>
      <td className="preparation content_td"><p>{recipe.preparation}</p></td>
      <td className="actions">
        <button name="delete" onClick={deleteRecipe}>Delete</button>
      </td>
    </tr>
  )
}

export default RecipeDisplay