import React from 'react'
import Logo from './Assests/Screenshot 2023-12-02 132802.png'

export default function Home() {
  return (
    <div className='Home'>
        <p className='Time-btc'>
            It's time to trade,<br /> <span> the <span className='future'>  future.</span> </span>
        </p>
        <p className='Trade-btc'>Trade BTC,ETC Futures With 125x Leverage And Earn Rewards. </p>
        <img src={Logo} alt='Image1' className='Image-logo'/>
    
    </div>
  )
}
