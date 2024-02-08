let jahreId = [
    {id:2008, value:"2008"},
    {id:2009, value:"2009"},
    {id:2010, value:"2010"},
    {id:2011, value:"2011"},
    {id:2012, value:"2012"},
    {id:2013, value:"2013"},
    {id:2014, value:"2014"},
    {id:2015, value:"2015"},
    {id:2016, value:"2016"},
    {id:2017, value:"2017"},
    {id:2018, value:"2018"},
    {id:2019, value:"2019"},
    {id:2020, value:"2020"},
    {id:2021, value:"2021"},
    {id:2022, value:"2022"},
    {id:2023, value:"2023"}
]


const loadData = () => {
    let years = parseInt(document.getElementById("year").value);
let jahreIds = jahreId.find(jahre => jahre.id === years) 
let jahreReal = jahreIds.value

    fetch("https://api.openligadb.de/getbltable/bl1/" + jahreReal).then((result) => {
        result.json().then((data) => {
            getInfos(data);

        })
    })
}

const getInfos = (data) => {
    let html = "";
    data.forEach(element => {
        html += "<table><tr><td>" + element.shortName + " </td> <td> </td></tr> " + "<tr> <th>"+ element.goals +"</th> </tr> </table>"
    });
    
    
    document.getElementById("output").innerHTML = html;
}
loadData()

console.log("https://api.openligadb.de/getbltable/bl1/" + jahreReal)