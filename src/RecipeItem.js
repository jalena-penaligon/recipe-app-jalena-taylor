
import React from "react";

function RecipeItem({ recipe, deleteRecipe }) {
  return (
    <>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>
        <img style={{ width: "120px" }} src={recipe.photo} />
      </td>
      <td>{recipe.ingredients}</td>
      <td>{recipe.preparation}</td>

      <td>
        <button onClick={() => deleteRecipe(recipe.name)} name="delete">
          Delete
        </button>
      </td>
    </>
  );
}

export default RecipeItem;
