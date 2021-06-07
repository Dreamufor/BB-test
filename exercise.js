const sales = [
  { itemSold: 'Football', price: 19.99, dateSold: '2018-04-07', id: 'j_123' },
  { itemSold: 'Trainers', price: 159.95, dateSold: '2018-03-02', id: 't_acds1' },
  { itemSold: 'Cricket bat', price: 204.97, dateSold: '2018-04-05', id: 'j_456' },
  { itemSold: 'Rugby ball', price: 30.0, dateSold: '2017-04-22', id: 't_acds3' },
  { itemSold: 'Hockey stick', price: 54.95, dateSold: '2017-03-19', id: 'j_999' },
];

// 1
const getItemSoldTotalPrice = () => {
  return sales.reduce((result, item) => result + item.price, 0).toFixed(2);
};

// 2
const getSoldItems = () => {
  return sales.filter((item) => item.dateSold.includes('2017'));
};

// 3
const getSortedItemsSoldString = () => {
  return sales.map((item) => item.itemSold).sort();
};

// 4
const getPropertyById = (id) => {
  return sales.find((item) => item.id === id);
};

console.log(getItemSoldTotalPrice(), '1');
console.log(getSoldItems(), '2');
console.log(getSortedItemsSoldString(), '3');
console.log(getPropertyById('j_999'), '4');
