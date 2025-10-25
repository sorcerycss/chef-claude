export default function Main() {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];
  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
  }

  return (
    <>
      <main>
        <form className="add-ingredient-form" action="">
          <input
            type="text"
            placeholder="e.g. oregano"
            name=""
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
