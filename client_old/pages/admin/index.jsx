import { useState } from "react";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";
import NotFound from "../../components/NotFound";


const Admin = (props) => {
    const [type, setType] = useState('admin_login');


    console.log(props);
    return (function () {
        switch (type) {
            case "admin_login":
                return <AdminLogin setType={setType} />
            case "admin_dashboard":
                return <AdminDashboard />
            default:
                <AdminLogin setType={setType} />
        }
    })()
};

export default Admin;
