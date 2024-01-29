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
        html += "<div>" + element.teamName + "</div>"
    });

    document.getElementById("output").innerHTML = html;
}
loadData()