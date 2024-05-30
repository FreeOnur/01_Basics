import { useState } from 'react';
import QRCode from 'react-qr-code';

export default function QrCode() {
  const [wifiType, setWifiType] = useState("T:WPA");
  const [hidden, setHidden] = useState("");
  const [password, setPassword] = useState("");
  const [SSID, setSSID] = useState("");
  const [bgColor, setBgColor] = useState("#FFFFFF")
  
  
  let array1 = [wifiType, hidden ? `H:${hidden}` : "", SSID ? `S:${SSID}` : "",password ? `P:${password}` : ""];

  let wifi = "WIFI:";
  for (let i = 0; i < array1.length; i++) {
     
      wifi += array1[i] + ";";
    
  }
 
  
 
 
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='relative left-[930px] top-[80px] h-[650px] w-[250px] pr-[30px] bg-[#191919] border border-black'>
        <div className=' grid grid-cols-2 grid-rows-4 gap-3'>
          <div className='font-poppins drop-shadow-[10px] text-shadow-white text-white antialiased'>Size:</div>
          <input id='size' type="number" min="0"/>
          <div className='font-poppins drop-shadow-[10px] text-shadow-white text-white antialiased'>Colour-Bg:</div>
          <input id='qr-bg-color'  onChange={(event) => {
          setBgColor(event.target.value);
        }} type="color"/>
          <div className='font-poppins drop-shadow-[10px] text-shadow-white text-white antialiased'>Colour-pixel:</div>
          <input id='qr-pix-color' type="color"/>
          <div className='font-poppins drop-shadow-[10px] text-shadow-white text-white antialiased'>Logo:</div>
          <input id='qr-image' className=' w-[127px]' type="file"/>
       
          
        </div>
      </div>
      <div className='grid grid-cols-1'>
    	    
        <div className='w-[650px] h-[100px] mb-[20px] mt-[40px] relative border border-black bg-[#939393]'>

          <div>
            <h1 className='absolute left-0 text-white'>Netzwerkname:</h1>
            <input onChange={(e) => setSSID(e.target.value)} className='absolute left-[120px] bg-white opacity-100'/>
          </div>

          <div>
            <input onChange={(e) => setHidden(e.target.checked ? "true" : "")} type='checkbox' className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <h1 className='absolute top-[0px] right-[39%] text-white'>hidden?</h1>
          </div>

          <div>
            <h1 className='absolute top-0 right-[27%] text-white'>Password:</h1>
            <input onChange={(e) => setPassword(e.target.value)} className='absolute top-0 right-1 w-[160px]' type='password'/>
          </div>

          <h1 className='absolute left-0 bottom-0 mb-[20px] text-white'>Verschlüsselung:</h1>

          <div>
            <input onChange={() => setWifiType("")} type='checkbox' className="absolute bottom-0 mb-[20px] left-[130px] w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <h1 className='absolute bottom-0 mb-[20px] left-[148px] text-white'>keine</h1>
          </div>

          <div>
            <input onChange={() => setWifiType("T:WPA")} type='checkbox' className="absolute bottom-0 mb-[20px] left-[190px] w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <h1 className='absolute bottom-0 mb-[20px] left-[210px] text-white'>WPA/WPA2</h1>
          </div>

          <div>
            <input onChange={() => setWifiType("T:WEP")} type='checkbox' className="absolute bottom-0 mb-[20px] left-[300px] w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <h1 className='absolute bottom-0 mb-[20px] left-[320px] text-white'>WEP</h1>
          </div>
        </div>

        <div className='flex justify-center items-center border border-black w-[650px] h-[650px] bg-white'>
          <QRCode value={wifi} bgColor={bgColor}/>
        </div>

      </div>
    </div>
  )
}
