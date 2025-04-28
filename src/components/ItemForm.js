import React, { useState } from "react";

function ItemForm({ onAddItem }) { // Pass onAddItem to handle form submission
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from refreshing the page
    const newItem = {
      id: Date.now(), // Using Date.now() for a unique key
      name,
      category,
      isInCart: false, // Default value for items
    };
    onAddItem(newItem); // Pass the new item to the parent
    setName(""); // Reset input fields after submission
    setCategory("Produce");
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
