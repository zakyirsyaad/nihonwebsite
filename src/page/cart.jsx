import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cart.css'
import { NavLink } from 'react-router-dom';

const CartTable = () => {
    const [showModal, setShowModal] = useState(false);

    const handleCheckout = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    const orderItems = [
        { name: 'Produk A', price: 100000, quantity: 5 },
        { name: 'Produk B', price: 150000, quantity: 3 },
        // Add more order items as needed
    ];

    // Calculate total price
    const totalPrice = orderItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
    return (
        <div className='cart'>
            <p className='cart-header'>Keranjang Belanja</p>
            <div className='cart-container'>
                <div>
                    <h4>Keranjang Belanja</h4>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Nama Produk</th>
                                <th>Harga</th>
                                <th>Jumlah</th>
                                <th>Subtotal</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Produk A</td>
                                <td>Rp 100.000</td>
                                <td>2</td>
                                <td>Rp 200.000</td>
                                <td>
                                    <Button variant="danger">Hapus</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>Produk B</td>
                                <td>Rp 150.000</td>
                                <td>1</td>
                                <td>Rp 150.000</td>
                                <td>
                                    <Button variant="danger">Hapus</Button>
                                </td>
                            </tr>
                            {/* Tambahkan data keranjang lainnya sesuai kebutuhan */}
                        </tbody>
                    </Table>
                </div>
                <div>
                    <h4>Ringkasan Belanja</h4>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Nama Produk</th>
                                <th>Harga</th>
                                <th>Jumlah</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderItems.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>Rp {item.price.toLocaleString()}</td>
                                    <td>{item.quantity}</td>
                                    <td>Rp {(item.price * item.quantity).toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <p>Total Harga: Rp {totalPrice.toLocaleString()}</p>
                    <Button variant="dark" onClick={handleCheckout}>Checkout</Button>
                </div>
            </div>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Checkout</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Anda telah berhasil checkout!</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Tutup
                    </Button>
                    <NavLink className="link" to="/status">
                        <Button variant="primary">
                            Cek Status Pesanan
                        </Button>
                    </NavLink>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CartTable;
