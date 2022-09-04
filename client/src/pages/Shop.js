import React, {useContext, useEffect} from 'react'
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/temp/TypeBar";
import BrandBar from "../components/temp/BrandBar";
import DeviceList from "../components/temp/DeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceApi";

const Shop = () => {

    const {device} = useContext(Context);

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices().then(data => device.setDevices(data.rows))
    }, [])

    return (
       <Container>
           <Row className="mt-2">
                <Col  sm={5} md={4} lg={3}><TypeBar /></Col>
               <Col  sm={7} md={8} lg={9}>
                   <BrandBar />

                   <DeviceList/>
               </Col>
           </Row>
       </Container>
    )
}

export default observer(Shop);