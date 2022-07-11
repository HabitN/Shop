import React from 'react';
import { Card, Col, Container, Image, Row, Button } from 'react-bootstrap';
import bigStar from '../assets/bigStar.png'

const DevicePage = () => {
    const device = {id: 1, name:'12 pro', price:4999, rating:0, img:'a582f34f-0dee-4165-8b14-7cbf21e77549.jpg'}
    const description = [
        {id:1, title: 'Оперативная память', description: '5 Гб'},
        {id:2, title: 'Камра', description: '12 Мп'},
        {id:3, title: 'Процессор', description: 'Пентиум 3'},
        {id:4, title: 'Количество ядер', description: '2'},
        {id:5, title: 'Аккумулятор', description: '4000'},
    ]
    
    return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2 className="d-flex flex-column align-items-center">{device.name}</h2>
                        <div
                            className='d-flex align-items-center justify-content-center'
                            style={{background: `url(${bigStar}) no-repeat center center`, width:240, height:240, backgroundSize: 'cover', fontSize: 64}}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className='d-flex flex-column align-items-center justify-content-around'
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>От: {device.price} руб.</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button> 
                    </Card>   
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {description.map(d =>
                    <Row key={d.id} style={{background: d.id % 2 === 0 && 'lightgray', padding: 10}}> 
                        {d.title} {d.description}   
                    </Row>    
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;