import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    addRecipe(formData); // Call the passed-in function to add the recipe
    setFormData({ ...initialFormState }); // Reset the form
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
                Name:
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  required
                />
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
                Cuisine:
                <input
                  type="text"
                  id="cuisine"
                  name="cuisine"
                  onChange={handleChange}
                  value={formData.cuisine}
                  required
                />
              </label>
            </td>
            <td>
              <label htmlFor="photo">
                Url:
                <input
                  type="url"
                  id="photo"
                  name="photo"
                  onChange={handleChange}
                  value={formData.url}
                  required
                />
              </label>
            </td>
            <td>
              <label htmlFor="ingredients">
                Ingredients:
                <textarea
                  id="ingredients"
                  name="ingredients"
                  onChange={handleChange}
                  value={formData.ingredients}
                  required
                />
              </label>
            </td>
            <td>
              <label htmlFor="preparation">
                Preparation:
                <textarea
                  id="preparation"
                  name="preparation"
                  onChange={handleChange}
                  value={formData.preparation}
                  required
                />
              </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
