import { useState } from 'react';
import QRCode from 'qrcode.react';
import { Link } from 'react-router-dom';

export default function QrCode_SMS() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("Hello World");
  const [bgColor, setBgColor] = useState("#000000")
  const [fgColor, setFgColor] = useState("#FFFFFF")  
  const [qrImg, setImg] = useState("")
  const [qrSize, setQrSize] = useState(128)
  const [centerSizeWidth, setCenterSizeWidth] = useState(24)
  const [centerSizeHeight, setCenterSizeHeight] = useState(24)
  
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='relative left-[930px] top-[80px] h-[650px] w-[250px] pr-[30px] bg-[#191919] border border-black'>
        <div className=' grid grid-cols-2 grid-rows-4 gap-3'>
          <div className='font-poppins drop-shadow-[10px] text-shadow-white text-white antialiased'>Size:</div>
          <input id='size' onChange={(element) => {setQrSize(element.target.value);}} type="number" min="48"/>
          <div className='font-poppins drop-shadow-[10px] text-shadow-white text-white antialiased'>Colour-Bg:</div>
          <input id='qr-bg-color'  onChange={(element) => {setBgColor(element.target.value);}} type="color"/>
          <div className='font-poppins drop-shadow-[10px] text-shadow-white text-white antialiased'>Colour-pixel:</div>
          <input id='qr-pix-color' onChange={(element) => {setFgColor(element.target.value);}} type="color"/>
          <div className='font-poppins drop-shadow-[10px] text-shadow-white text-white antialiased'>Logo:</div>
          <input id='qr-image' onChange={(element) => {
            let file = element.target.files[0];
            let reader = new FileReader;
            reader.onload = (e) => {
              setImg(e.target.result)
            }
            reader.readAsDataURL(file);
          }} className=' w-[127px]' type="file"/>
          <div className='font-poppins drop-shadow-[10px] text-shadow-white text-white antialiased'>H:</div>
          <input id='size' className='w-[30px]' onChange={(element) => {setCenterSizeHeight(element.target.value);}} type="number" min="0"/>
          <div className='font-poppins drop-shadow-[10px] text-shadow-white text-white antialiased'>W:</div>
          <input id='size' className='w-[30px]' onChange={(element) => {setCenterSizeWidth(element.target.value);}} type="number" min="0"/>
          <button onClick={() => {
            setMessage("")
            setPhoneNumber("")
            setBgColor("#000000")
            setFgColor("#FFFFFF")
            setImg("")
            setQrSize(128)
            setCenterSizeHeight(24)
            setCenterSizeWidth(24)

          }} className='font-poppins drop-shadow-[10px] text-shadow-white text-white antialiased border border-white ml-[20px]'>Reset</button>
          <div className='font-poppins drop-shadow-[10px] text-shadow-white text-white antialiased'>QR Code Type:</div>
        <Link to="/qrcode-URL" className='font-poppins drop-shadow-[10px] text-shadow-white text-white antialiased'>URL</Link>
        <Link to="/" className='font-poppins drop-shadow-[10px] text-shadow-white text-white antialiased'>WLAN</Link>
        <Link to="/qrcode-TEXT" className='font-poppins drop-shadow-[10px] text-shadow-white text-white antialiased'>TEXT</Link>
        <Link to="/qrcode-SMS" className='font-poppins drop-shadow-[10px] text-shadow-white text-white antialiased'>SMS</Link>
        <Link to="/qrcode-URL" className='font-poppins drop-shadow-[10px] text-shadow-white text-white antialiased'>EMAIL</Link>
        <Link to="/qrcode-URL" className='font-poppins drop-shadow-[10px] text-shadow-white text-white antialiased'>BITCOIN</Link>   
        

       
          
        </div>
        
      </div>
      <div className='grid grid-cols-1'>
    	    
        <div className='w-[650px] h-[100px] mb-[20px] mt-[40px] relative border border-black bg-[#939393]'>

          <div>
            <h1 className='absolute left-0 text-white'>Phonenumber:</h1>
            <input type='number' onChange={(e) => setPhoneNumber(e.target.value)} className='absolute left-[120px] bg-white opacity-100'/>
          </div>

          <div>
            <input onChange={(e) => setMessage(e.target.value)} type='text' className='absolute left-[450px] bg-white opacity-100'/>
            <h1 className='absolute top-[0px] right-[39%] text-white'>Message:</h1>
          </div>

        </div>

        <div className='flex justify-center items-center border border-black w-[650px] h-[650px] bg-white'>
          <QRCode level='H' size={qrSize} value={"smsto:"+phoneNumber+":"+message} bgColor={bgColor} fgColor={fgColor} imageSettings={{
            src: qrImg,
            height: centerSizeHeight,
            width: centerSizeWidth,
            excavate: true,
          }}/>
        </div>

      </div>
    </div>
  )
}
