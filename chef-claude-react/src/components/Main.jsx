import React from "react";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);

  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

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
        <ul>{ingredientsListItems}</ul>
      </main>
    </>
  );
}
