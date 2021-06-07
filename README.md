# BB-test

This is a beautiful business assessment.

# HTML/CSS knowledge check

# JS exercise

> 1. Return the sum of the price of all properties as a single value.

```
const getItemSoldTotalPrice = () => {
  return sales.reduce((result, item) => result + item.price, 0).toFixed(2);
};
```

> 2. Return the items which were sold in 2017.

```
const getSoldItems = () => {
  return sales.filter((item) => item.dateSold.includes('2017'));
};
```

> 3. Return an array of all of the itemsSold properties as strings, sorted alphabetically.

```
const getSortedItemsSoldString = () => {
  return sales.map((item) => item.itemSold).sort();
};
```

> 4. Using id as an argument, return the sale which matches the id.

```
const getPropertyById = (id) => {
  return sales.find((item) => item.id === id);
};
```
