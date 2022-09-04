import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {Context} from "../../index";
import {Card, Col, Row} from "react-bootstrap";

const BrandBar = () => {

    const {device} = useContext(Context)
    return (
        <Row className='d-flex' style={{paddingLeft: '12px', paddingRight: '12px'}}>
                {device?.brands.map((brand, i) =>
                        <Card
                            border={brand.id === device.selectedBrand.id ? 'danger' : false}
                            onClick={() => device?.setSelectedBrand(brand)}
                            key={brand.id}
                            className={`p-1 ${i !== device?.brands.length -1 && 'me-2'}`}
                            style={{width: 'fit-content', cursor: "pointer"}}
                        >
                            {brand.name}
                        </Card>
                )}
        </Row>
    )
};


export default observer(BrandBar);