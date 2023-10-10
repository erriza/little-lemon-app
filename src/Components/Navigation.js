import Logo from "./../Logo.svg"
function Navigation () {
    return (
        <div className="navbar">
            <img src={Logo} alt="little lemon logo"></img>
            <ul className="navbar-list">
                <li>
                    <a href="#Home">Home</a>
                </li>
                <li>
                    <a href="#About">About</a>
                </li>
                <li>
                    <a href="#Menu">Menu</a>
                </li>
                <li>
                    <a href="#Reservations">Reservations</a>
                </li>
                <li>
                    <a href="#OrderOnline">Order Online</a>
                </li>
                <li>
                    <a href="#Login">Login</a>
                </li>
            </ul>
        </div>
    )
}

export default Navigation