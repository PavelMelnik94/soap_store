import React, {useContext, useState} from 'react'
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils";
import {observer} from "mobx-react-lite";
import {login, registration} from "../http/userApi";
import {Context} from "../index";

const Auth = () => {
    const {user} = useContext(Context);

    const location = useLocation();
    const history = useHistory();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }

            user.setUser(data)
            user.setIsAuth(true)
            history.push(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

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
                        value={email}
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    <Form.Control
                        className={"mt-3"}
                        placeholder="Введите ваш password..."
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Row className="d-flex justify-content-between align-items-center  mt-3">
                        {isLogin ? renderRegistrationText() : renderExistAccountText()}
                        <Button onClick={() => click()} className="col-4" style={{width: "fit-content", height: "fit-content"}} variant={"outline-success"}>
                            {isLogin ? 'Войти' : "Регистрация"}
                        </Button>
                    </Row>

                </Form>
            </Card>

        </Container>
    )
}

export default observer(Auth)