import {observer} from "mobx-react-lite";
import {Card, Col, Image} from "react-bootstrap";
import {AiOutlineStar} from 'react-icons/ai';
import {useHistory} from 'react-router-dom'
import {DEVICE_ROUTE} from "../../utils";

const DeviceItem = ({device}) => {

    const history = useHistory();

    const {price, id, name, img, rating, brand} = device;
    return (
        <Col
            onClick={() => history.push(DEVICE_ROUTE + '/' + id)}
            md={4}
            sm={3}
            className={'mb-4'}
        >
            <Card
                key={id}
                style={{width: "100%", cursor: "pointer"}}
            >
                <Image style={{borderTopLeftRadius: "5px",borderTopRightRadius: "5px", }} width={'100%'} height={'100%'} src={process.env.REACT_APP_API_URL + img} />
               <div className="ps-1 pe-1 mt-1">

                   <div className="d-flex justify-content-between align-items-center ">
                       <div>{brand}</div>
                       <div className="d-flex justify-content-between align-items-center">{rating} <AiOutlineStar width={18} height={18}/></div>
                   </div>

                   <div>{name}</div>
                   <div>{price}$</div>
               </div>
            </Card>
        </Col>
    )
};


export default observer(DeviceItem);