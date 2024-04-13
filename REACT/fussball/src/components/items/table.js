import React from 'react'

export default function table() {
    
    const loadData = () => {
        fetch("https://api.openligadb.de/getbltable/bl1/2020").then((result) => {
            result.json().then((data)=> {
                getData(data)
            })
        })
    }

    const getData = (data) => {
        let html = "";
        data.forEach(element => {
            html += "<div class='tableTeamName' className:'position '>" + element.goals + " </div> " + "<div class='tableGoals'>"+ element.shortName +"</div>" + "<div class='tableWins'>"+ element.won +"</div>" + "<div class='tableLost'>"+ element.lost +"</div>"+ "<div class='tableDraw'>"+ element.draw +"</div>"+ "<div class='tableMatches'>"+ element.matches +"</div>"
            
        });
        document.getElementById("output").innerHTML = html;
    }
    loadData()
  return (
    <div>
      <div class="table1" id="tables">Bundesland</div>
        <div class="table2" id="tables">Tore</div>
        <div class="table3" id="tables">Won</div>
        <div class="table4" id="tables">Lost</div>
        <div class="table5" id="tables">Draw</div>
        <div class="table6" >Spiele</div>
        <div class="border" id="output"></div>
    </div>
  )
}
