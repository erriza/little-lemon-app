import './Header.css';
import restaurantFood from './../../assets/restauranfood.jpg'

function Header () {
    return (
        <div className="mainHeader">
            <div className='main-info'>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>Es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno </p>
                <button className='btn-header'>Reserve a Table</button>
            </div>
            <div className='imgHeader'>
                <img src={restaurantFood} className='restaurant-food' alt='image from food served in little lemon restaurant'/>
            </div>
        </div>
    )
}

export default Header