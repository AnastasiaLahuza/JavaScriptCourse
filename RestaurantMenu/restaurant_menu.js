const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

// The provided code converts breakfast menu array items into HTML strings using map() and an arrow function to structure each item's HTML format.
// index + 1: is because the map method provides the current item's index starting from 0 by default. When displaying a list to users, it's more natural and user-friendly to start counting from 1 rather than 0.

// So, index + 1 adjusts the zero-based index to a one-based count for display purposes:

// If index is 0, index + 1 is 1 → "Item 1"
// If index is 1, index + 1 is 2 → "Item 2"
// Subsequently, a string concatenation method has been used to join the generated HTML strings into one cohesive string using join ('') to prepare for insertion.

// The <p> tag creates a block of text separated from other content, making each menu item appear on its own line with spacing around it.
//This improves readability by clearly showing each item as a distinct entry.

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;

//The result will be similar for all methods
// Restaurant Menu Iteration
// Breakfast Menu
// Item 1: Pancakes

// Item 2: Eggs Benedict

// Item 3: Oatmeal

// Item 4: Frittata

// Main Course Menu
// Item 1: Steak

// Item 2: Pasta

// Item 3: Burger

// Item 4: Salmon

// Dessert Menu
// Item 1: Cake

// Item 2: Ice Cream

// Item 3: Pudding

// Item 4: Fruit Salad