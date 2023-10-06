function updateUniqueItems(groceryMap) {
  // Check if the argument is a map
  if (!(groceryMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate over the map's entries
  for (const [item, quantity] of groceryMap.entries()) {
    if (quantity === 1) {
      // Update the quantity to 100 for items with an initial quantity of 1
      groceryMap.set(item, 100);
    }
  }
}

export default updateUniqueItems;
