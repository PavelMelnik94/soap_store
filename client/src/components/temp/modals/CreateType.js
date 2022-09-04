import {observer} from "mobx-react-lite";
import {Button, Form, Modal} from "react-bootstrap";
import {useContext} from "react";
import {Context} from "../../../index";

const CreateType = ({show, onHide}) => {
    const {device} = useContext(Context);

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        placeholder="введите название типа"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={() => onHide()}>Закрыть</Button>
                <Button variant="outline-success" onClick={() => onHide()}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
};

export default observer(CreateType);