import React from 'react'
import Users7 from '../../Assets/Images/Users7.png'
import Users8 from '../../Assets/Images/Users8.png'
import message from '../../Assets/Images/message.png'
import Photo4 from '../../Assets/Images/Photo4.png'
import add_new from '../../Assets/Images/add-new-card.png'
import like from '../../Assets/Images/Heart.png'
import link from '../../Assets/Images/link.png'
import './Card.css'

export default function Card2() {
  return (
    <>

        <div className="card-container">
            <div className="card-title">
              <img src={Photo4} alt='photo4' style={{width:"280px"}}/>
            </div>
            <div className="card-id-wrapper">
                <div className="card-id card-id6"></div>
                <div className="card-id card-id3"></div>
                <div className="card-id card-id5" style={{marginLeft:"5px"}}></div>
            </div>
            <div className="card-title">
            Types of paper in catalog printing
            </div>
            <div className="card-title" style={{fontSize:"13px",lineHeight:"18px",color:"grey"}}>
            Branding is no longer simply about visual appeal (or the cherry in the apple pie example, as given in my earlier article).
            </div>
            <div className="card-tag">
                <div className="card-tag-icon"><img src={Users7} alt='users7'/></div>

                
                <div className="card-tag-box">
                    <div className="card-tag-icon">34<img src={message} alt='message'/></div>
                    <div className="card-tag-icon">23<img src={like} alt='like'/></div>
                    <div className="card-tag-icon">98<img src={link} alt='link'/></div>
                </div>
                        
            </div>
        </div>

        <div className="card-container">
            <div className="card-id-wrapper">
                <div className="card-id card-id2"></div>
                <div className="card-id card-id4"></div>
            </div>
            <div className="card-title">
            There is no competition
            </div>
            <div className="card-title" style={{fontSize:"13px",lineHeight:"18px",color:"grey"}}>
            This article is floated online with an aim to help you find the best dvd printing solution.
            </div>
            <div className="card-tag">
                <div className="card-tag-icon"><img src={Users8} alt='users8'/></div>

                
                <div className="card-tag-box">
                    <div className="card-tag-icon">23<img src={message} alt='message'/></div>
                    <div className="card-tag-icon">12<img src={like} alt='like'/></div>
                    <div className="card-tag-icon">44<img src={link} alt='link'/></div>
                </div>
                        
            </div>
        </div>

        <div className="card-container new" >
              <img src={add_new} alt='add_new' style={{width:"280px"}}/>
        </div>

    </>
  )
}