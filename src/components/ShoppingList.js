import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [items, setItems] = useState([]);

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]); // Add new item to the list
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory; // Filter based on selected category
  });

  return (
    <div className="ShoppingList">
      <ItemForm onAddItem={handleAddItem} /> {/* Pass handleAddItem function */}
      <Filter
        category={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

