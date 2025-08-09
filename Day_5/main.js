// Array to store items
let items = [];

// Create: Add a new item
function createItem(item) {
    items.push(item);
    console.log(`✅ Item "${item}" added successfully!`);
}

// Read: Display all items
function readItems() {
    console.log("📋 Current Items:");
    if (items.length === 0) {
        console.log("No items found.");
    } else {
        items.forEach((item, index) => {
            console.log(`${index}: ${item}`);
        });
    }
}

// Update: Modify an item by index
function updateItem(index, newItem) {
    if (index >= 0 && index < items.length) {
        console.log(`✏️ Item "${items[index]}" updated to "${newItem}".`);
        items[index] = newItem;
    } else {
        console.log("❌ Invalid index. Update failed.");
    }
}

// Delete: Remove an item by index
function deleteItem(index) {
    if (index >= 0 && index < items.length) {
        console.log(`🗑️ Item "${items[index]}" deleted.`);
        items.splice(index, 1);
    } else {
        console.log("❌ Invalid index. Delete failed.");
    }
}

// Example usage:
createItem("Laptop");
createItem("Phone");
createItem("Tablet");
readItems();
updateItem(1, "Smartphone");
readItems();
deleteItem(0);
readItems();
