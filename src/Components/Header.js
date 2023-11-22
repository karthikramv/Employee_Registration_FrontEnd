import { Link } from "react-router-dom"

function Header(){
    return(
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <Link to="/add-employee" className="navbar-brand">
                            Employee Managment Application</Link>
                    </div>
                </nav>
            </header>
        </div>
    )
}
export default Header