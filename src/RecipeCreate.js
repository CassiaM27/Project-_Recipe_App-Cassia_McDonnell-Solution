import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {

  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    createRecipe({ ...formData });
    setFormData({ ...initialFormState });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input 
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                onChange={handleChange}
                required={true}
                value={formData.name}
              />
            </td>
            <td>
              <input
                id="cuisine"
                name="cuisine"
                type="text"
                placeholder="Cuisine"
                onChange={handleChange}
                required={true}
                value={formData.cuisine}
              />
            </td>
            <td>
              <input
                id="photo"
                name="photo"
                type="text"
                placeholder="URL"
                onChange={handleChange}
                required={true}
                value={formData.photo}
              />
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                type="text"
                placeholder="Ingredients"
                onChange={handleChange}
                value={formData.ingredients}
              />
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                type="text"
                placeholder="Preparation"
                onChange={handleChange}
                value={formData.preparation}
              />
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
