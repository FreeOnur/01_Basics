const loadData = () => {
    fetch("https://api.openligadb.de/getbltable/bl1/2023").then((result) => {
        result.json().then((data) => {
            getInfos(data);

        })
    })
}

const getInfos = (data) => {
    let html = "";
    data.forEach(element => {
        html += "<table><tr><td>" + element.teamName + " </td> <td> hallo </td></tr> " + "<tr> <th>"+ element.goals +"</th> </tr> </table>"
    });
    
    
    document.getElementById("output").innerHTML = html;
}
loadData()