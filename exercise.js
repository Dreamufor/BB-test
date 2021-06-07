const sales = [
  { itemSold: 'Football', price: 19.99, dateSold: '2018-04-07', id: 'j_123' },
  { itemSold: 'Trainers', price: 159.95, dateSold: '2018-03-02', id: 't_acds1' },
  { itemSold: 'Cricket bat', price: 204.97, dateSold: '2018-04-05', id: 'j_456' },
  { itemSold: 'Rugby ball', price: 30.0, dateSold: '2017-04-22', id: 't_acds3' },
  { itemSold: 'Hockey stick', price: 54.95, dateSold: '2017-03-19', id: 'j_999' },
];

// 1
const getItemSoldTotalPrice = (sales) => {
  return sales.reduce((result, item) => result + item.price, 0).toFixed(2);
};

// 2
const getSoldItemsOfAYear = (sales, year) => {
  return sales.filter((item) => item.dateSold.includes(year));
};

// 3

const handleCaseInsensitiveSort = (strA, strB) => {
  return strA.toLowerCase().localeCompare(strB.toLowerCase());
};

const getSortedItemsSoldString = (sales) => {
  return sales.map((item) => item.itemSold).sort(handleCaseInsensitiveSort);
};

// 4
const getPropertyById = (id, sales) => {
  return sales.find((item) => item.id === id);
};

console.log(getItemSoldTotalPrice(sales), '1');
console.log(getSoldItemsOfAYear(sales, '2017'), '2');
console.log(getSortedItemsSoldString(sales), '3');
console.log(getPropertyById('j_999', sales), '4');

console.log(['a', 'B', 'e', 'C'].sort(), 'sort');
console.log(['a', 'B', 'e', 'C'].sort(handleCaseInsensitiveSort), 'caseInsensitiveSort');
