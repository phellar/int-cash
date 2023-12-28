import React from 'react'
import Navbar from './Navbar' 
import appleCta from '../assets/appstorecta.png'
import googleCta from '../assets/Google_Play_Store_badge_EN.png'
import heroImg from '../assets/heroImg.png'



const Content = () => {
  return (
    <main>
        <section className="hero-section">
            <Navbar />
                <div className='container'>
                    <div className="hero-content">
                            <div className='hero-content-box'>
                                <h1>Simple, Transparent, and Affordable Global Transactions</h1>
                                <p>Say goodbye to long wait times and expensive fees. Our hassle-free platform
                                lets you send money to loved ones, pay bills, and make purchases from 
                                anywhere in the world. Trust us to handle your transfers securely and efficiently.</p>
                                <a href='#' className='hero-cta-1'>Send Money</a>
                                <a href='#' className='hero-cta-2'>Open an account</a>
                            </div>
                            <img src={heroImg} className='hero-img'  width='500px'/>

                  </div>
                </div>
        </section>
    </main>
  )
}

export default Content