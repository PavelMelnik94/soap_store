import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/temp/TypeBar";
import BrandBar from "../components/temp/BrandBar";
import DeviceList from "../components/temp/DeviceList";

const Shop = () => {
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

export default Shop