import React from 'react'
import Phone from '../assets/Image.png'
import RefreshCircle from '../assets/refresh-circle.png'
import Money from '../assets/moneys.png'
import Support from '../assets/24-support.png'
import Security  from '../assets/security-user.png'


export const MultipleFeatures = () => {
  return (
    <section className='multiple-features'>
      <div className="container">
            <h1>Multiple Features we Offer</h1>
              <div className="multiple-card-group">
                      <img src={Phone} alt="App" width='400px' height= '500px'  className='mcg-img' />
                          <div className="line">
                            <div className="line-child"></div>
                          </div>
                                <div className="multi-card">
                                      <div className="multiple-card">
                                          <img src={RefreshCircle} />
                                        <h4>Global Currency Exchange</h4>
                                        <p>Convert your money into the currency of your choice with competitive exchange rates  <strong><a href='#'>Read More...</a></strong></p>
                                      </div>
                                      <div className="multiple-card">
                                          <img src={Security} />
                                        <h4>Bank-level Security</h4>
                                        <p>Rest easy knowing that your data and transactions areprotected by the same level of security used <strong><a href='#'>Read More...</a></strong> </p>
                                      </div>

                                      <div className="highlight" >
                                          <img src={Support} />
                                        <h4>24*7 Customer Support</h4>
                                        <p>Receive fast and friendly support from our knowledgeable customer support team whenever you need <strong> <a href='#'>Read More...</a></strong> </p>
                                      </div>

                                      <div className="multiple-card">
                                          <img src={Money} />
                                        <h4>Multiple Payment Methods</h4>
                                        <p>Choose from a variety of payment methods to suit your needs, including credit/debit cards, bank  <strong> <a href='#'>Read More...</a></strong> </p>
                                      </div>
                          </div>
                          
              </div>
      </div>       
    </section>
  )
}

export default MultipleFeatures
