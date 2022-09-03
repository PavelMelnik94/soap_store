import React from 'react'
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {BsStar} from 'react-icons/bs'
const DevicePage = () => {

    const device = {id: 1, brand: 'samsung', name: 'iphone', price: 25800, rating: 3, img: 'https://images.unsplash.com/photo-1662142935529-2cc58bc313f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60'};

    const decription = [
        {id: 1, title: 'оперативная память', description: "5 гб"},
        {id: 2, title: 'оперативная память', description: "5 гб"},
        {id: 3, title: 'оперативная память', description: "5 гб"},
        {id: 4, title: 'оперативная память', description: "5 гб"},
        {id: 5, title: 'оперативная память', description: "5 гб"},
    ];
        return (
        <Container className={'mt-3'}>
                <Row>
                    <Col md={4}>
                        <Image width={'100%'} height={'100%'} src={device.img}/>
                    </Col>
                    <Col md={4}>
                        <h2>{device.name}</h2>
                        <div className="d-flex align-items-center justify-content-between">
                            rating:
                            <div className="d-flex align-items-center">
                                {device.rating}
                                <BsStar/>
                            </div>

                        </div>

                        <div className="pe-2 ps-2 mt-2">
                            <div>Характеристики:</div>
                            {decription.map(info =>
                                <Row key={info.id}>
                                    {info.title}: {info.description}
                                </Row>
                            )}
                        </div>
                    </Col>
                    <Col md={4}>
                        <Card style={{width: "100%", height: "100%", fontSize: "32px", }} className={"d-flex flex-column align-items-center justify-content-around"}>
                            <h3>От: {device.price}руб.</h3>
                            <Button variant={"outline-dark"}>Добавить в корзину</Button>
                        </Card>
                    </Col>
                </Row>

        </Container>
    )
}

export default DevicePage