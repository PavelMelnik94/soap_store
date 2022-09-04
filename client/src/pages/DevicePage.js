import React, {useEffect, useState} from 'react'
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {BsStar} from 'react-icons/bs'
import {useParams} from 'react-router-dom';
import {fetchOneDevice} from "../http/deviceApi";

const DevicePage = () => {
    const [device, setDevice] = useState({info: []});
    const {id} = useParams();

    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [id])
        return (
        <Container className={'mt-3'}>
                <Row>
                    <Col md={4}>
                        <Image width={'100%'} height={'100%'} src={process.env.REACT_APP_API_URL + device.img}/>
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
                            {device.info.map(info =>
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