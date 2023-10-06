function cleanSet(set, startString) {
  // Create an array of matching values
  const matchingValues = Array.from(set).filter((value) => value.startsWith(startString));

  // Join the matching values with hyphens
  const resultString = matchingValues.map((value) => value.slice(startString.length)).join('-');

  return resultString;
}

export default cleanSet;
