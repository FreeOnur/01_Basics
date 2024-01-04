
let data = [
    {firstName:"Hans", lastName:"Huber", points:30},
    {firstName:"Paul", lastName:"Müller", points:35},
    {firstName:"Franz", lastName:"Maier", points:32},
]




function loadPeople() {
    let html ="";

    data.forEach(element => {
    html += "<div>" + element.firstName + "" + element.lastName + "</div>"
    
    })
    console.log(html);
    document.getElementById("content").innerHTML = html;

}

loadPeople();