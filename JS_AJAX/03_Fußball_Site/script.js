const loadData = () => {
    fetch("https://api.openligadb.de/getbltable/bl1/2023").then((result) => {
        result.json().then((data) => {
            getInfos(data);

        })
    })
}

const getInfos = (data) => {
    data.forEach(element => {
        html += "<ul> <li>" + element.points + "</li> </ul>"
    });

    document.getElementById("output").innerHTML = html;
}