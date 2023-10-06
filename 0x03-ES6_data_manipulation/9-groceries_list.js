function groceriesList() {
  const groceryMap = new Map();

  // Add the grocery items and their quantities to the map
  groceryMap.set('Apples', 10);
  groceryMap.set('Tomatoes', 10);
  groceryMap.set('Pasta', 1);
  groceryMap.set('Rice', 1);
  groceryMap.set('Banana', 5);

  return groceryMap;
}

export default groceriesList;
