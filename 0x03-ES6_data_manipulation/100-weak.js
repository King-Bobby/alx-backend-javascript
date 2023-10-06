const weakMap = new WeakMap();

function queryAPI(endpoint) {
  // Check if the endpoint is already in the WeakMap
  if (!weakMap.has(endpoint)) {
    // If not, add it with a count of 1
    weakMap.set(endpoint, 1);
  } else {
    // If it's in the WeakMap, increment the count
    const count = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, count);

    // Check if the count is >= 5
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }
  }
}

export { queryAPI, weakMap };
