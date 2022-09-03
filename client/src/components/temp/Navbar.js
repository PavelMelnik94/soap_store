import {useContext} from "react";
import {Context} from "../../index";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../../utils";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";

const NavBar = () => {
const {user} = useContext(Context)

    const history = useHistory();

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink to={SHOP_ROUTE} >
                    магазин
                </NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto">
                        <Button  onClick={() => history.push(ADMIN_ROUTE)}>Админ панель</Button>
                        <Button onClick={() => history.push(LOGIN_ROUTE)} style={{marginLeft: "5px"}} >выйти</Button>
                    </Nav>
                :
                    <Nav className="ml-auto">
                        <Button onClick={() => user.setIsAuth(!user.isAuth)}  >Авторизация</Button>
                    </Nav>}
            </Container>
        </Navbar>
    )
}

export default observer(NavBar);