import {observer} from "mobx-react-lite";
import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";
import {createBrand} from "../../../http/deviceApi";

const CreateBrand = ({show, onHide}) => {

    const [value, setValue] = useState('');

    const addBrand = () => {
        createBrand({name: value}).then(data => {
            setValue('')
            onHide();
        })
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить бренд
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder="введите название бренда"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={() => onHide()}>Закрыть</Button>
                <Button variant="outline-success" onClick={() => addBrand()}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
};

export default observer(CreateBrand);