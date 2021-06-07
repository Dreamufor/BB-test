# BB-test

This is a beautiful business assessment.

# HTML/CSS knowledge check

# JS exercise

> 1. Return the sum of the price of all properties as a single value.

```
const getItemSoldTotalPrice = (sales) => {
  return sales.reduce((result, item) => result + item.price, 0).toFixed(2);
};
```

> 2. Return the items which were sold in 2017.

```
const getSoldItemsOfAYear = (sales, year) => {
  return sales.filter((item) => item.dateSold.includes(year));
};

getSoldItemsOfAYear(sales, '2017')

```

> 3. Return an array of all of the itemsSold properties as strings, sorted alphabetically.

```
const handleCaseInsensitiveSort = (strA, strB) => {
  return strA.toLowerCase().localeCompare(strB.toLowerCase());
};

const getSortedItemsSoldString = (sales) => {
  return sales.map((item) => item.itemSold).sort(handleCaseInsensitiveSort);
};
```

> 4. Using id as an argument, return the sale which matches the id.

```
const getPropertyById = (id, sales) => {
  return sales.find((item) => item.id === id);
};
```

Explanation:

- take sales array as parameter, so every function is a pure function
- for case 3, add case insensitive sort, so it will ignore the character case and always out put the result alphabetically
