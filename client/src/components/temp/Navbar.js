import {useContext} from "react";
import {Context} from "../../index";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../../utils";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const NavBar = () => {
const {user} = useContext(Context)


    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink to={SHOP_ROUTE} >
                    магазин
                </NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto">
                        <Button  >Админ панель</Button>
                        <Button onClick={() => user.setIsAuth(!user.isAuth)} style={{marginLeft: "5px"}} >выйти</Button>
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