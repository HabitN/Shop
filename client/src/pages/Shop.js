import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Context } from '../index';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import TypeBar from '../components/TypeBar';
import { fetchTypes } from '../http/deviceAPI';

const Shop = observer(() => {
    const {device} = useContext(Context)
    useEffect( () => {
        fetchTypes().then(data => device.setTypes(data))
    }, [])

    return (
        <Container>
            <Row className='mt-2'>
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <dir></dir>
                    <DeviceList/>
                </Col>
            </Row>
       </Container>
    );
});

export default Shop;