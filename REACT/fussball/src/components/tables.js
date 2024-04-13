import React from 'react'

export default function Tables() {
    const loadData = () => {
        fetch("https://api.openligadb.de/getbltable/bl2/2020").then((result) => {
            result.json().then((data) => {
                getData(data);
    
            })
        })
    }
    const getData = (data) => {
        let html = "";
        data.forEach(element => {
            html += "<div class='position: relative left-36'>" + element.goals + " </div> <div class='position: relative right-40'>"+ element.shortName +"</div><div class='position: relative right-20'>"+ element.won +"</div><div class='position: relative right-36'>"+ element.lost +"</div><div class='position: relative right-52'>"+ element.draw +"</div><div class='position: relative right-60'>"+ element.matches +"</div>"
        });
        
        
        document.getElementById("output").innerHTML = html;
    }
    loadData()
  return (
    <div>
    <div className='flex gap-16'>
        <div class=''>Bundesland</div>
    <div class=''>Tore</div>
    <div class=''>Won</div>
    <div class=''>Lost</div>
    <div class=''>Draw</div>
    <div class='' >Spiele</div>
    
    </div>
    <div class='grid grid-cols-6 w-240' id='output' ></div>
    </div>
    
  )
}
