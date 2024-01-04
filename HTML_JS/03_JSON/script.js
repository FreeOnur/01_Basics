
let data = [
    {firstName:"Hans", lastName:"Huber", points:30},
    {firstName:"Paul", lastName:"Müller", points:35},
    {firstName:"Franz", lastName:"Maier", points:32},
]




for (let index = 0; index < data.length; index++) {
    const element = data[index];
    console.log(element.firstName);
    
}

data.forEach(element => {
    console.log(element.lastName);
})
function loadPeople() {





}