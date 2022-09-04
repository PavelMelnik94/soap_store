import React, {useState} from 'react'
import {Button, Container} from "react-bootstrap";

import CreateType from "../components/temp/modals/CreateType";
import CreateDevice from "../components/temp/modals/CreateDevice";
import CreateBrand from "../components/temp/modals/CreateBrand";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false);
    const [deviceVisible, setDeviceVisible] = useState(false);
    const [typeVisible, setTypeVisible] = useState(false);

    return (
        <Container className="d-flex flex-column">

            <Button onClick={() => setTypeVisible(true)} variant="outline-dark" className="mb-2 p-2 mt-2">
                Добавить тип
            </Button>

            <Button onClick={() => setBrandVisible(true)} variant="outline-dark" className="mb-2 p-2">
                Добавить бренд
            </Button>

            <Button onClick={() => setDeviceVisible(
                true
            )} variant="outline-dark" className="mb-2 p-2">
                Добавить устройство
            </Button>

            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
        </Container>
    )
}

export default Admin