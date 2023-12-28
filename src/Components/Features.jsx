import React from 'react'

const features = () => {
  return (
    <section className='ourFeatures'>
       <div className="container">
            <div className="features">
                <div className="feature-heading">
                    <h1>Our Features</h1>
                    <p>With our user-friendly interface, you can initiate a transfer in just a few clicks. Our system uses the latest encryption technology to ensure your personal and financial information is kept safe and secure. Plus, our competitive exchange rates mean you get the most for your money.</p>
                </div>
                    <div className="card-group">
                        <div className="card">
                            <h3>International <br></br>Transfer</h3>
                            <p>We're committed to making international payments fast, affordable, and hassle-free for everyone, from small business owners to large enterprises.</p>
                        </div>
                            <div className="card">
                                <h3>Safe and <br></br> Secure</h3>
                                <p>Secure and user-friendly platform that empowers individuals and organizations to easily send and receive payments globally. </p>
                            </div>

                                <div className="card">
                                <h3>Transparency & <br></br>Simplicity </h3>
                                <p>We prioritize the security of our users' information and transactions, utilizing the latest technology and best practices to keep your data safe.</p>
                            </div>
                        
                    </div>
            </div>
       </div>
    </section>
  )
}

export default features