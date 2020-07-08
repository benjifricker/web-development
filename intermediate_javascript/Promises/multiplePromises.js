const { checkInventory, processPayment, shipOrder } = require('./library2.js');


const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};


checkInventory(order)
.then((resolvedValueArray) => {
  return processPayment(resolvedValueArray);
})
.then((resolvedValueArray) => {
  return shipOrder(resolvedValueArray);
})
.then((successMessage) => {
  console.log(successMessage);
});