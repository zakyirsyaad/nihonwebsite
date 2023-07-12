import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './custom.css';
import gambarKaos from './custom-img/Kaos.jpeg';
import gambarKemeja from './custom-img/Kemeja.jpeg';
import gambarHoodie from './custom-img/Hoodie.jpeg';
import { NavLink } from 'react-router-dom';


export default function Custom() {
    const options = ['Hitam', 'Putih', 'Merah'];
    const defaultOption = options['Pilih Warna'];

    const handleSelect = (selectedOption) => {
        console.log(`Selected option: ${selectedOption.value}`);
    };

    const [selectedMerchandise, setSelectedMerchandise] = useState('');

    const handleMerchandiseChange = (event) => {
        setSelectedMerchandise(event.target.value);
    };

    return (
        <div className="custom-container">
            <p className='custom-header'>Desain Produk Kamu Disini</p>
            <div className="input-container">
                <div className='form-container'>
                    <div>
                        <label>Pilih Jenis Merchandise Kamu</label>
                        <div>
                            <input
                                type="radio"
                                value="Kaos"
                                name="merchandise"
                                checked={selectedMerchandise === 'Kaos'}
                                onChange={handleMerchandiseChange}
                            />{' '}
                            Kaos
                            <input
                                type="radio"
                                value="Kemeja"
                                name="merchandise"
                                checked={selectedMerchandise === 'Kemeja'}
                                onChange={handleMerchandiseChange}
                            />{' '}
                            Kemeja
                            <input
                                type="radio"
                                value="Hoodie"
                                name="merchandise"
                                checked={selectedMerchandise === 'Hoodie'}
                                onChange={handleMerchandiseChange}
                            />{' '}
                            Hoodie
                        </div>
                        <hr />
                    </div>
                    <div>
                        <label>Pilih Warna Merchandise Kamu</label>
                        <div className="dropdown">
                            <Dropdown
                                options={options}
                                onChange={handleSelect}
                                value={defaultOption}
                                placeholder="Pilih Warna"
                            />
                        </div>
                    </div>
                    <hr />
                    <div>
                        <label>File Design Anda Miliki</label>
                        <div>
                            <input type="file" name="" id="" />
                        </div>
                    </div>
                    <hr />
                    <div>
                        <label>Pilih Ukuran Kamu</label>
                        <div className='form'>
                            <div className='form-box'>
                                <label>Lebar</label>
                                <input type="number" name="" id="" />
                            </div>
                            <div className='form-box'>
                                <label>Tinggi</label>
                                <input type="number" name="" id="" />
                            </div>
                            <div className='form-box'>
                                <label>Panjang</label>
                                <input type="number" name="" id="" />
                            </div>
                        </div>
                    </div>
                    <div className='form-box'>
                        <label>Catatan Khusus</label>
                        <input type="text" placeholder="Catatan Khusus" />
                    </div>
                    <div>
                        <NavLink className='link' to='/cart'><button className='order'>Lakukan Pesanan </button></NavLink>
                    </div>
                </div>
                <div>
                    <div>
                        {selectedMerchandise && (
                            <img
                                src={
                                    selectedMerchandise === 'Kaos'
                                        ? gambarKaos
                                        : selectedMerchandise === 'Kemeja'
                                            ? gambarKemeja
                                            : selectedMerchandise === 'Hoodie'
                                                ? gambarHoodie
                                                : ''
                                }
                                alt={selectedMerchandise}
                                style={{ width: '500px', height: '500px', objectFit: "cover", borderRadius: '25px' }}
                            />
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}
