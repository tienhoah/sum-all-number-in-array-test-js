function sumItems(array) {
  // Sum all the numbers in the array
  let total = 0;
  array.forEach((item) => {
    if (Array.isArray(item)) {
      // Print out all it's items individually
      total += sumItems(item);
    } else {
      total += item;
    }
  });
  return total;
}



module.exports = sumItems;


