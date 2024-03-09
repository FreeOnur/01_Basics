// Promise irl = Promise JS (Promise completed, rejected, resolved)
let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 2) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})

p.then((message) => {
    console.log('This is in the then ' + message);
}).catch((message) => {
    console.log('This is in the catch' + message);
})


const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')
})


Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) => {
    console.log(messages);
})

Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(message);
})


//Test 1

let Gamma = new Promise((resolve, reject) => {
    let a = 8
    let b = 2
    let c = a%b
    if(c==0) {
        resolve('Gerade Zahl')
    } else {
        reject('Ungerade Zahl')
    }
})

Gamma.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
})