import QRCode from 'react-qr-code';

export default function QrCode() {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='w-[600px] h-[200px] relative top-[420px]'></div>
      <div className='flex justify-center items-center border border-black w-[600px] h-[600px] bg-white'><QRCode value='`WIFI:T:WPA;S:${Magenta};P:${ARSLAN6820};;`'/></div>
      <div></div>
    </div>
  )
}
