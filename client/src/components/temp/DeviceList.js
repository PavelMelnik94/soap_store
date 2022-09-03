import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {Context} from "../../index";
import {Row} from "react-bootstrap";
import DeviceItem from "./DeviceItem";

const DeviceList = () => {

    const {device} = useContext(Context)
    return (
        <Row className='mt-3 d-flex'>
            {device?.devices.map(item =>
                <DeviceItem key={item.id} device={item} />
            )}
        </Row>
    )
};


export default observer(DeviceList);