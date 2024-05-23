import QRCode from 'react-qr-code';

export default function QrCode() {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='border border-black w-[500px] h-[500px]'><QRCode value='`WIFI:T:WPA;S:${Magenta};P:${ARSLAN6820};;`'/></div>
    </div>
  )
}
