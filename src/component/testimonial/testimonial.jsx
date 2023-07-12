import React from 'react'
import galuh from '../../assets/galuh.jpg'
import indra from '../../assets/indra.jpg'
import jep from '../../assets/jep.jpg'

export default function Testimonial() {
    return (
        <div className='testimonial'>
            <p className='inspiration-header'>Our Client</p>
            <div className='image-ins'>
                <div className='img-testi-container'>
                    <img className='img-testi' src={galuh} alt="" srcset="" />
                </div>
                <div>
                    <img className='img-testi' src={indra} alt="" srcset="" />
                </div>
                <div>
                    <img className='img-testi' src={jep} alt="" srcset="" />
                </div>
            </div>
        </div>
    )
}
