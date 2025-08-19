// JavaScript Data Types
// number: 42
// string: "Hello, World!"
// boolean: true
// object: { property: "value" }
// array: [1, 2, 3, "four", true]

// Shopping List Item
// - Id: number
// - Item Name: string
// - Unit Price: number
// - Quantity: number
// - Total Price: number
// - CheckedOut: boolean

let shoppingList = [
  {
    id: 1,
    itemName: "Maggi",
    unitPrice: 25,
    quantity: 4,
    totalPrice: 100,
    checkedOut: false,
  },
  {
    id: 2,
    itemName: "Milk",
    unitPrice: 50,
    quantity: 2,
    totalPrice: 100,
    checkedOut: false,
  },
  {
    id: 3,
    itemName: "Bread",
    unitPrice: 30,
    quantity: 1,
    totalPrice: 30,
    checkedOut: false,
  },
];

console.table(shoppingList);
