// Get references to the HTML elements (the input box, the item count, and the shopping list container)
const itemInput = document.getElementById("itemInput"); // Where user types in a new item
const itemCount = document.getElementById("itemCount"); // Displays the total number of items
const shoppingList = document.getElementById("shoppingList"); // Displays the list of shopping items

// Initialize the shopping list with some default items (with the item name and whether they have been bought or not)
let shopDb = [
  { itemName: "Rice", itemBought: false }, // Rice hasn't been bought yet
  { itemName: "Milk", itemBought: false }, // Milk hasn't been bought yet
  { itemName: "Noodles", itemBought: false }, // Noodles haven't been bought yet
  { itemName: "Tomato Paste", itemBought: true }, // Tomato Paste has already been bought
];

// Function to add a new item to the shopping list
function addToShoppingList() {
  const itemName = String(itemInput.value); // Get the value of the item input box
  const itemExists = Boolean(shopDb.filter(item => item.itemName == itemName).length); // Check if the item already exists in the list

  // If the item name is too short (less than or equal to 2 characters) or if the item already exists, don't add it
  if (itemName.length <= 2 || itemExists) return;

  // If the item is valid, create a new item object and add it to the shopping list (with "itemBought" set to false)
  const newItem = { itemName, itemBought: false };
  shopDb.push(newItem); // Add the new item to the database
  itemInput.value = ''; // Clear the input field
  renderUi(); // Re-render the UI to reflect the changes
}

// Function to delete an item from the shopping list by its index
function deleteItem(itemIndex) {
  shopDb = shopDb.filter((_, index) => index != itemIndex); // Remove the item at the given index
  renderUi(); // Re-render the UI to reflect the changes
}

// Function to toggle the "bought" status of an item (mark it as bought or not)
function updateItem(itemIndex) {
  const oldValue = shopDb[itemIndex]; // Get the current value of the item at the given index

  // Toggle the itemBought status (if it was false, it becomes true and vice versa)
  shopDb[itemIndex] = {
    ...oldValue,
    itemBought: !oldValue.itemBought,
  };

  renderUi(); // Re-render the UI to reflect the changes
}

// Function to create the HTML structure for each shopping list item (with an "update" checkbox and "delete" button)
function createShoppingItemUi(item = {}, index = 0) {
  // Create the HTML for each shopping item
  const itemHtml = `<li class="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-150 group">
                    <div class="flex items-center space-x-3 flex-1">
                        <input ${item.itemBought ? 'checked' : ''} onclick="updateItem(${index})" id="toggle-${index}" type="checkbox" class="w-4 h-4 text-blue-500 border-2 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 transition-all duration-200" onchange="toggleItem(this)">
                        <div class="w-3 h-3 bg-orange-400 rounded-full transition-all duration-200"></div>
                        <span class="text-gray-800 ${item.itemBought ? 'line-through' : ''} font-medium transition-all duration-200">${item?.itemName}</span>
                    </div>
                    <button onclick="deleteItem(${index})" class="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-all duration-200 opacity-0 group-hover:opacity-100">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                        </svg>
                    </button>
                </li>`;

  // Create a new span element to hold the HTML content for this item
  const itemElement = document.createElement('span');
  itemElement.innerHTML = itemHtml; // Set the HTML inside the span
  return itemElement; // Return the span element
}

// Function to create and display the entire shopping list UI
function createShoppingListUi() {
  shoppingList.innerHTML = ''; // Clear any existing content in the shopping list
  // Loop through all the items in the shopping list and create their UI elements
  shopDb.forEach(function (item, index) {
    shoppingList.appendChild(createShoppingItemUi(item, index)); // Add each item to the shopping list UI
  });
}

// Function to update the UI based on the current shopping list
function renderUi() {
  itemCount.innerText = shopDb.length; // Display the total number of items in the list
  createShoppingListUi(); // Recreate and display the shopping list
}

// Initial rendering of the UI
renderUi(); // Show the current shopping list when the page first loads
