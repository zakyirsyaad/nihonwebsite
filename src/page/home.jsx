import React from 'react'
import Inspiration from '../component/inspiration/inspiration'
import Why from '../component/why/why'
import Testimonial from '../component/testimonial/testimonial'
import { NavLink } from 'react-router-dom';

export default function Home() {
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <section>
            <div className='home-container'>
                <div className='text'>
                    <p className='text-header'>Japanese Merchandise Custom Brand</p>
                    <p className='text-desc'>Ayo tetap bergaya sesuai dengan keinginanmu.</p>
                    <div className="btn">
                        <NavLink to="/custom">
                            <button className='home-btn'>Shop Now</button>
                        </NavLink>
                    </div>
                </div>
                <div className='image-container'>
                    <img className='image-home' src="https://images.unsplash.com/photo-1566204978576-77f6addcef4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" srcset="" />
                </div>
            </div>
            <Inspiration />
            <Why />
            <Testimonial />
        </section>
    )
}
