import React from 'react'
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils";
import {observer} from "mobx-react-lite";

const Auth = () => {

    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;

    const renderRegistrationText = () => {
        return (
            <div className="col-8 d-flex">
                <span className="me-2"> Нет аккаунта?</span>
                <NavLink to={REGISTRATION_ROUTE}>Зарегестрироваться</NavLink>
            </div>
        )
    };

    const renderExistAccountText = () => {
        return (
            <div className="col-8 d-flex">
                <span className="me-2"> есть аккаунт?</span>
                <NavLink to={LOGIN_ROUTE}>Войти</NavLink>
            </div>
        )
    };
    return (
        <Container
            style={{height: window.innerHeight - 54}}
            className="d-flex justify-content-center align-items-center"
        >

            <Card style={{width: '600px'}} className="p-5">
                <h2 className={"m-auto"}>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className={'d-flex flex-column'}>
                    <Form.Control
                        className={"mt-3"}
                        placeholder="Введите ваш email..."
                        />
                    <Form.Control
                        className={"mt-3"}
                        placeholder="Введите ваш password..."
                    />

                    <Row className="d-flex justify-content-between align-items-center  mt-3">
                        {isLogin ? renderRegistrationText() : renderExistAccountText()}
                        <Button className="col-4" style={{width: "fit-content", height: "fit-content"}} variant={"outline-success"}>
                            {isLogin ? 'Войти' : "Регистрация"}
                        </Button>
                    </Row>

                </Form>
            </Card>

        </Container>
    )
}

export default observer(Auth)