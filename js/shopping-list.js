const itemInput = document.getElementById("itemInput");
const itemCount = document.getElementById("itemCount");
const shoppingList = document.getElementById("shoppingList");

const shoppingListDb = [
    "Orange",
    "Apple",
    "Rice",
    "Soap"
];

function reloadUiComponents() {
    itemCount.innerText = shoppingListDb.length;
    renderItems()
}

function addItem() {
    const newItem = String(itemInput.value);

    console.log(newItem.length);

    if (newItem.length <= 2) return;

    shoppingListDb.push(newItem);
    reloadUiComponents();

    itemInput.value = null;
}

function renderItem(itemValue, index) {
    const itemHtml = `<li class="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-150 group">
                    <div class="flex items-center space-x-3">
                        <div class="w-3 h-3 bg-orange-400 rounded-full"></div>
                        <span class="text-gray-800 font-medium">${itemValue}</span>
                    </div>
                    <button class="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-all duration-200 opacity-0 group-hover:opacity-100">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                        </svg>
                    </button>
                </li>`;

    const itemElement = document.createElement('li')
    itemElement.innerHTML = itemHtml;
    shoppingList.appendChild(itemElement);
}

function renderItems() {
    shoppingList.innerHTML = '';
    shoppingListDb.forEach(renderItem)
}
reloadUiComponents();

