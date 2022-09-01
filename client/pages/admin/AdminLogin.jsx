import {Button, Card, Input, Loading, Row, Text} from "@nextui-org/react";
import {useState} from "react";

const AdminLogin = ({setType}) => {
    const [form, setForm] = useState({login: '', password: '', role: 'ADMIN'});
    const [isLoading, setIsLoading] = useState(false);

    const handle = {
        login: async () => {
            //todo: запрос за бекенд
            setType('admin_dashboard');
        },
        change: (value, key) => {
            setForm({...form, [key]: value});
        },
    }
    return (
        <div className='admin__login'>

            <Card css={{ mw: "330px" }}>
                <Card.Header>
                    <Text b>Вход в админ панель</Text>
                </Card.Header>
                <Card.Divider />
                <Card.Body css={{ py: "$10" }}>
                    <Input
                        disabled={isLoading}
                        onChange={(e) => handle.change(e.target.value, 'login')}
                        css={{ marginBottom: "10px" }}
                        clearable
                        placeholder="login"
                    />
                    <Input.Password
                        disabled={isLoading}
                        onChange={(e) => handle.change(e.target.value, 'password')}
                        placeholder="password"
                    />
                </Card.Body>
                <Card.Divider />
                <Card.Footer>
                    <Row justify="flex-end">
                        <Button animated onClick={() => handle.login()} size="sm" color="primary">
                            {isLoading && <Loading type="points" color="currentColor" size="sm" />}
                            login
                        </Button>
                    </Row>
                </Card.Footer>
            </Card>
        </div>
    )
}


export default AdminLogin;