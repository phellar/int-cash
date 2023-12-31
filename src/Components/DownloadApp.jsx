import React from 'react'
import BgLine from '../assets/BG lines.png'
import Voltage from '../assets/67.png'
import App from '../assets/Rectangle.png'
import Dollar from '../assets/business-3d-flying-dollar-note.png'
import Gold from '../assets/business-3d-golden-bitcoin-front.png'
import GoogleCta from '../assets/Google_Play_Store_badge_EN.png'
import AppleCta from '../assets/appstorecta.png'

const DownloadApp = () => {
  return (
    <section className='downloadAPP'>
        <div className="container">
            <div className="download-bg">
              {/* <img src={BgLine} alt=""  width='100%' /> */}
            <div className="mother-div">
                <div className="voltage">
                <img src={Voltage} alt="" />
                <img src={Gold} alt=""   />
                </div>

                    <div className="download-msg">
                      <h1>Do business with the world</h1>
                       <a href='#'><img src={GoogleCta} alt="" /></a> 
                       <a href='#'><img src={AppleCta} alt="" /></a> 
                        
                    </div>

                          <div className="app-img">
                              <img src={Dollar} alt=""  className='dollar'  />
                              <img src={App} alt=""  width='' />
                          </div>



            {/* <img src={App} alt=""  width='' />
              <img src={Dollar} alt=""   />
              <img src={Gold} alt=""   /> */}
            </div>
             
            </div>
        </div>
    </section>
  )
}

export default DownloadApp