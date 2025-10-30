import React from "react";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);

  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngerients) => [...prevIngerients, newIngredient]);
  }

  return (
    <>
      <main>
        <form onSubmit={handleSubmit} className="add-ingredient-form" action="">
          <input
            type="text"
            placeholder="e.g. oregano"
            name="ingredient"
            id=""
            aria-label="Add ingredient"
          />
          <button className="btn">Add ingredient</button>
        </form>
        <ul>{ingredientsListItems}</ul>
      </main>
    </>
  );
}
