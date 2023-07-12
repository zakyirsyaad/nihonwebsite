import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './status.css'

const StatusPengiriman = () => {
    return (
        <Container className='status'>
            <h5 className="text-center">Status Pengiriman</h5>
            <Row className="mx-auto text-center">
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                    <Col className="satu w-100">
                        <p className="rounded-pill bg-success text-light">1</p>
                        <span>Pre-order</span>
                    </Col>
                    <hr />
                    <Col className="dua w-100">
                        <p className="rounded-pill bg-success-subtle">2</p>
                        <span>Pengemasan</span>
                    </Col>
                    <hr />
                    <Col className="tiga w-100">
                        <p className="rounded-pill bg-success-subtle">3</p>
                        <span>Pengiriman</span>
                    </Col>
                    <hr />
                    <Col className="empat w-100">
                        <p className="rounded-pill bg-success-subtle">4</p>
                        <span>Selesai</span>
                    </Col>
                </div>
                <hr />
            </Row>
        </Container>
    );
};

export default StatusPengiriman;
