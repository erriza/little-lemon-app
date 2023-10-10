import Logo from './../assets/Asset 2@3x.png'
function Footer () {
    return (
        <>
            <div className="footerLemon">
                <div className="footer1">
                    <img src={Logo} className='footer-logo' alt="logo for little lemon"/>
                    <ul className='footer-list'>
                        <li id='list-title'>Dormat Navigation</li>
                        <li>Nums</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Reservations</li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
                </div>
                <div className="footer2">
                    <ul className='footer-list'>
                        <li id='list-title'>Contact</li>
                        <li>Nums</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Reservations</li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
                </div>
                <div className="footer3">
                    <ul className='footer-list'>
                        <li id='list-title'>Social Media Links</li>
                        <li>Nums</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Reservations</li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer