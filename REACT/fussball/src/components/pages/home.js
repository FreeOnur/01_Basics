import React from 'react'
import maradonna from '../images/e2eb81dd067ba81066f00e13742655c1.jpg'
import messi from '../images/87054568e227e0247d592178a61f7ce9.jpg'
import ronaldo from '../images/cristiano-ronaldo-8373364_640.webp'
import neymar from '../images/HD-wallpaper-neymar-brazilian-national-team-soccer-footballers-neymar-jr.jpg'
import pele from '../images/wp3005559.jpg'
import salah from '../images/Mohamed-Salah-16d0c13.webp'
import mbappe from '../images/Kylian-Mbappe-4e95281.webp'
import johan from '../images/johan_cruyff.jpeg'



import Slidebar from '../slidebar'

export default function Home() {
  return (<div className="w-full relative top h-1000px max-h-full bg-full m-0 grayscale-[80%] bg-gradient-to-r from-orange-500 to-red-500 flex  justify-center items-center">
                <image src="../images/Diego-Maradona-1986.webp"></image>

    <div className=' text-[30px] border-solid flex justify-center items-center absolute top-0 left-[51%]  bg-gray-800 hover:bg-gray-700 w-48 h-24 border-2 border-black '><Slidebar link={"./table"} name="Tabelle" /> </div>
    <div className=' text-[30px] border-solid flex justify-center items-center absolute top-0 left-[41%]  bg-gray-800 hover:bg-gray-700 w-48 h-24 border-2 border-black '><Slidebar link={"/"} name="Home" /></div>
    <div className=' grid grid-cols-4'>
      <img className='size-80'src={maradonna} alt="Maradonna" />
      <img className='size-80'src={messi} alt="Messi" />
      <img className='size-80'src={ronaldo} alt="Ronaldo" />
      <img className='size-80'src={neymar} alt="Neymar" />
      <img className='size-80'src={pele} alt="Pele" />
      <img className='size-80'src={salah} alt="Salah" />
      <img className='size-80'src={mbappe} alt="Mbappe" />
      <img className='size-80'src={johan} alt="Mbappe" />

    
    </div>
    

    </div>
    
  )
}
