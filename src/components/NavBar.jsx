import{ Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/use-auth.js";

function NavBar() {
    const {auth, setAuth} = useAuth();

    const handleLogout = () => {
        window.localStorage.removeItem("token");
        setAuth({ token: null });
    };

    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                {auth.token ? (
                    <Link to="/" onClick={handleLogout}>
                        Log Out
                    </Link>
                    ) : (
                    <Link to="/login">Login</Link>
                )}
                {auth.token ? (
                    <Link to="/project/add" >Add Project</Link>
                ) : null
                }
                {auth.token ? null :(<Link to="/register" >Register</Link>)}
            </nav>
            <Outlet />
        </div>
    );
}

export default NavBar;
