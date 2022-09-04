import { Helmet } from "react-helmet";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/temp/Navbar";
import {observer} from "mobx-react-lite";
import {useContext, useEffect, useState} from "react";
import {Context} from "./index";
import {check} from "./http/userApi";
import {Spinner} from "react-bootstrap";

function App() {

    const {user} = useContext(Context);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(data => {
            // user.setUser(true)
            user.setIsAuth(true)
        } ).finally(() => setLoading(false))
    }, [])

    if (loading) {
        return (
            <div style={{width: '100%', height: '100vh'}} className="d-flex justify-content-center align-items-center">
                <Spinner animation="grow" />
            </div>
        )
    }
  return (
    <BrowserRouter >

      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
        <NavBar />
      <AppRouter />

    </BrowserRouter>
  );
}

export default observer(App);
