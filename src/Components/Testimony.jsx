import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import { FaQuoteRight } from 'react-icons/fa'
import { FaArrowCircleRight } from 'react-icons/fa'
import { FaArrowCircleLeft } from 'react-icons/fa'
import { useState } from 'react'

const Testimony = () => {

  const [testimony, setTestimony] = useState (
  [
    {
    id: 1,
    name: 'Liman Njie',
    occupation: "Entreprenuer",
    image: '../assets/image11.png',
    feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatem commodi rem minus ratione temporibus sequi quibusdam optio voluptatum numquam autem ",
    },
    {
    id: 1,
    name: 'phellar Dcally',
    occupation: "Entreprenuer",
    image: '../assets/image11.png',
    feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatem commodi rem minus ratione temporibus sequi quibusdam optio voluptatum numquam autem ",
    },
    {
    id: 1,
    name: 'Ibukun OLuwadamilare',
    occupation: "Software Engineer",
    image: '../assets/image11.png',
    feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatem commodi rem minus ratione temporibus sequi quibusdam optio voluptatum numquam autem ",
    }


  ] )

  const [currentIndex, setCurrentIndex] = useState(0 )




  const handleNextTestimony = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) )
  }
  const handlePrevTestimony = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1) )
  }



  return (
    <section className='testimony-section'>
        <div className="container">

                <div className="testimony-content-box">
                    <div className="testimony-img">
                      {/* <img src='' alt="" /> */}
                    </div>

                      <div className="testimony">
                        <h2>{testimony[currentIndex].name}</h2>
                        <p>{testimony[currentIndex].occupation}</p>
                        <p>{testimony[currentIndex].feedback}</p>
                      </div>

                      <div className="button">
                    <button onClick={handlePrevTestimony} className='btn'><FaArrowCircleLeft/></button>
                    <button onClick={handleNextTestimony} className='btn'><FaArrowCircleRight/></button>
                  </div>


                </div> 

             
                
        </div>          
    </section>
  )
}

export default Testimony