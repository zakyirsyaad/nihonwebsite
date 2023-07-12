import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Inspiration() {
    return (
        <div className='inspiration'>
            <p className='inspiration-header'>Inspiration Design</p>
            <div className='image-ins'>
                <div>
                    <img className='img-item-ins border-radius' src="https://images.unsplash.com/photo-1600328759671-85927887458d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" srcset="" />
                </div>
                <div>
                    <img className='img-item-ins' src="https://images.unsplash.com/photo-1583744999783-efe9dc5eac91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" srcset="" />
                </div>
                <div>
                    <img className='img-item-ins border-radius2' src="https://images.unsplash.com/photo-1598522396013-924ddcd44ada?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" srcset="" />
                </div>
            </div>
            <p className='inspiration-header'>Popular Product</p>
            <div className='image-ins'>
                <NavLink className='link' to='/cart'>
                    <div className='popular-container'>
                        <img className='img-popular' src="https://cf.shopee.co.id/file/b07149e9337ac034b96376eb79798d46" alt="" srcset="" />
                        <p className='nama-product'>Jaket Sweater Anime</p>
                        <p>Rp. 150.000</p>
                    </div>
                </NavLink>
                <NavLink className='link' to='/cart'>
                    <div className='popular-container'>
                        <img className='img-popular' src="https://cf.shopee.co.id/file/b07149e9337ac034b96376eb79798d46" alt="" srcset="" />
                        <p className='nama-product'>Jaket Sweater Anime</p>
                        <p>Rp. 150.000</p>
                    </div>
                </NavLink>
                <NavLink className='link' to='/cart'>
                    <div className='popular-container'>
                        <img className='img-popular' src="https://cf.shopee.co.id/file/b07149e9337ac034b96376eb79798d46" alt="" srcset="" />
                        <p className='nama-product'>Jaket Sweater Anime</p>
                        <p>Rp. 150.000</p>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}
