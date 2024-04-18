import React, { useEffect, useState } from 'react';

export default function Tables() {
    const [year, setYear] = useState("2023");
    const [bl, setBl] = useState("bl");
    
    useEffect(() => {
        loadData();
    }, [year]);
    const loadData = () => {
        
        fetch("https://api.openligadb.de/getbltable/"+bl+"/"+year).then((result) => {
            result.json().then((data) => {
                getData(data);
                
                
    
            })
        })
    }

    const sorting = (data, parameter) => {
        data.sort((a, b) => b[parameter] - a[parameter]);
        
        
    }
    

    const getData = (data) => {
        let html = "";        
        sorting(data, "goals")
        data.forEach(element => {
            if (element.shortName != null) {
                html += "<div class='position:  relative left-147px mb-4'>" + element.goals + " </div> <div class='position: relative right-40'>"+ element.shortName +"</div></div><div class='position: relative right-20'>"+ element.won +"</div><div class='position: relative right-36'>"+ element.lost +"</div><div class='position: relative right-52'>"+ element.draw +"</div><div class='position: relative right-269px'>"+ element.matches +"</div>"

            }
            
        });
        
        

        document.getElementById("output").innerHTML = html;

    }
    
    loadData()
  return (
    <div className=' bg-gray-500 border-solid border-4 border-black m-8 w-600px'>
    <div className='flex gap-16 bg-gray-700'>
       <select value={year} onChange={(element) => setYear(element.target.value)} className='position: relative left-600px h-50px w-213px'id='year' name='Jahr'>
       <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
            <option value="2009">2009</option>
            <option value="2008">2008</option>
        </select> 
        <select value={bl} onChange={(element) => setBl(element.target.value)} className='position: relative right-170px h-50px w-213px'id='bl' name='bl'>
            <option value="bl1">bl1</option>
            <option value="bl2">bl2</option>
            <option value="bl3">bl3</option>
            
        </select> 
    <div className='position: relative right-229px'>Bundesland</div>
    <div id='goals' class='position: relative right-232px'>Tore</div>
    <div id='wins'class='position: relative right-236px'>Won</div>
    <div id='loses'class='position: relative right-239px'>Lost</div>
    <div id='draws'class='position: relative right-239px'>Draw</div>
    <div id='games'class='position: relative right-240px' >Spiele</div>
    
    </div>
    <div class='grid grid-cols-6 mt-9 w-240 border-black' id='output' ></div>
    </div>
    
  )
}
