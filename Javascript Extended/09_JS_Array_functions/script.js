const items = [
    { name: 'Bike',     price:100 },
    { name: 'TV',     price:200 },
    { name: 'Album',     price:10 },
    { name: 'Book',     price:5 },
    { name: 'Phone',     price:500 },
    { name: 'Computer',     price:1000 },
    { name: 'Keyboard',     price:25 }
]

//Tested out filter a bit
// const filteredItems = items.filter((item) => {
//     if (item.name.includes("e")) {
//         return item.name
//     }
// })
// console.log(items);
// console.log(filteredItems);


// const itemNames = items.map((item) => {
//     return item.name
// })

// console.log(itemNames);


// const foundItem =  items.find((item) => {
//     return item.name === 'Album'
// })
// console.log(foundItem);


items.forEach(element => {
    console.log(element.price + 20)
});

