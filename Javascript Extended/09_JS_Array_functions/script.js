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
const filteredItems = items.filter((item) => {
    if (item.name.includes("e")) {
        return item.name
    }
})
console.log(items);
console.log(filteredItems);


const itemNames = items.map((item) => {
    return item.name
})

console.log(itemNames);


const foundItem =  items.find((item) => {
    return item.name === 'Album'
})
console.log(foundItem);


items.forEach(element => {
    console.log(element.price + 20)
});

//bei "some" falls eine Aussage stimmt wird für den ganzen Array true ausgegeben

const hasExpensiveItems = items.some((element) => {
   return element.price>20
})
console.log(hasExpensiveItems);


//every ist ähnlich wie some nur bei every wird halt statt nur wenn bei einem true alles true auszugeben wird hier geschaut ob jedes true ist wenn nicht => false
const hasInexpensiveItems = items.every((element) => {
    return element.price>20
 })
 console.log(hasInexpensiveItems);


const total = items.reduce((currentTotal, element) => {
    return element.price + currentTotal
 }, 0) //Diese 0 ist der Startpunk also von welcher Zahl aus er es sozusagen addier wenn dor 100 stehen würde würde man 100 mehr haben beim Ergebnis da es dort anfängt
 console.log(total);

const numbers = [1, 2, 3, 4, 5]

const includesTwo = numbers.includes(2)
console.log(includesTwo);
