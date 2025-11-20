import React from "react";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";
import { getRecipeFromChefClaude } from "../ai";

export default function Main() {
  const [ingredients, setIngredients] = React.useState(["chicken", "all the main spices", "corn", "heavy cream", "pasta"]);
  const [recipeShown, setRecipeShown] = React.useState(false);
  const [recipeText, setRecipeText] = React.useState("");

  const recipeSection = React.useRef(null)

  React.useEffect(() => {
    if (recipeShown !== "" && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView({behavir: "smooth"})
    }
  }, [recipeShown])

  async function handleGetRecipe() {
    try {
      const recipe = await getRecipeFromChefClaude(ingredients);
      console.log("RECIPE:", recipe);
      setRecipeText(recipe);
      setRecipeShown(true);
    } catch (err) {
      console.error("Error fetching recipe:", err);
    }
  }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <IngredientsList
          ref={recipeSection}
          ingredients={ingredients}
          handleGetRecipe={handleGetRecipe}
        />
      )}

      {recipeShown && <ClaudeRecipe recipeText={recipeText} />}
    </main>
  );
}
