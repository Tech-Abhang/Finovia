import React from 'react'
import Hero from '../product/Hero'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Navbar from '../Navbar'

const ProductPage = () => {
  return (
    <div>
        <Navbar />
        <Hero/>
        <hr className='mx-5'/>
        <LeftSection imageUrl="kite.png" productName="Kite" productDescription="Our Ultrafast streamlining market data , advanced charts , enhanced ui , and more . Expirence the kite seamlessly on your playstore and appstore" tryDemo="" learnMore="" googlePlay="" appStore=""/> 
        <RightSection imageUrl="coin.png" productName="Console" productDescription="The Central dashboard of zerodha account gain insights in your trades and investments with in-depth reports and visualization" link="Learn more"/>
        <LeftSection imageUrl="kiteconnect.png" productName="Kite Connect Api" productDescription="Our Ultrafast streamlining market data , advanced charts , enhanced ui , and more . Expirence the kite seamlessly on your playstore and appstore" tryDemo="" learnMore="" googlePlay="" appStore=""/> 
        <RightSection imageUrl="console.png" productName="Console" productDescription="The Central dashboard of zerodha account gain insights in your trades and investments with in-depth reports and visualization" link="Learn more"/>
    </div>
  )
}

export default ProductPage