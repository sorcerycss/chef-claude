import React from "react";

import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);

  const [recipeShown, setRecipeShown] = React.useState(false);

  function toggleRecipeShown() {
    setRecipeShown((prevShown) => !prevShown);
  }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngerients) => [...prevIngerients, newIngredient]);
  }

  return (
    <>
      <main>
        <form action={addIngredient} className="add-ingredient-form">
          <input
            type="text"
            placeholder="e.g. oregano"
            name="ingredient"
            aria-label="Add ingredient"
          />
          <button className="btn">Add ingredient</button>
        </form>

        {ingredients.length > 0 && (
          <IngredientsList
            ingredients={ingredients}
            toggleRecipeShown={toggleRecipeShown}
          />
        )}

        {recipeShown && <ClaudeRecipe />}
      </main>
    </>
  );
}
