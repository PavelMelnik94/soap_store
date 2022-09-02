import { Button, Card, Container, Input, Navbar, Row, Text } from "@nextui-org/react";
import { useState } from "react";
import { BsPlusCircle } from 'react-icons/bs'
import NotFound from "../../components/NotFound";

const AdminDashboard = (props) => {
    const [type, setType] = useState('admin_login');

    const role = 'USER'

    if (role !== props.role) { return <NotFound title='Доступ закрыт' /> }

    return (
        <div className="admin__dashboard">
            <Container >
                <Navbar isBordered variant='floating'>
                    <Navbar.Brand hideIn="xs">
                        <Button icon={<BsPlusCircle />} color="warning" auto>
                            Добавить заметку
                        </Button>
                    </Navbar.Brand>
                    <Navbar.Content hideIn="xs">
                        <Navbar.Link isActive href="#">Заметки</Navbar.Link>
                        <Navbar.Link href="#">Товары</Navbar.Link>
                        <Navbar.Link href="#">Заказы</Navbar.Link>
                        <Navbar.Link href="#">Категории</Navbar.Link>
                        <Navbar.Link href="#">Пользователи</Navbar.Link>
                    </Navbar.Content>

                    <Navbar.Content>
                        <Navbar.Item>
                            Hello, admin
                        </Navbar.Item>
                        <Navbar.Item>

                            <Button auto color="error">
                                logout
                            </Button>
                        </Navbar.Item>
                    </Navbar.Content>

                </Navbar>


            </Container>
        </div>
    )
};

export default AdminDashboard;


export async function getStaticProps(context) {
    return {
        props: {
            protected: true,
            role: "ADMIN",
        },
    }
}