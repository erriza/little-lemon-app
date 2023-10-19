import './Specials.css'
import img1 from  './../../assets/greekSalad.jpg';
import img2 from  './../../assets/bruschetta.jpg';
import img3 from  './../../assets/pasta.jpg';


function Specials () {
    return (
        <div className='mainSpecial'>
            <div className='main-special'>
                <div className='buttons-title'>
                    <h2>ORDER FOR DELIVERY!</h2>
                </div>
                <div className='buttons-container'>
                    <button className='btn-special' aria-label='On Click'>Lunch</button>
                    <button className='btn-special' aria-label='On Click'>Mains</button>
                    <button className='btn-special' aria-label='On Click'>Desserts</button>
                    <button className='btn-special' aria-label='On Click'>A La Carte</button>
                </div>
                <hr/>
                <div className='specials-container'>
                    <div className='special-content'>
                        <div>
                            <h3>Greek Salad</h3>
                            <p>The famus greek salad of crispy lettuce, peppers, olives and our Chicago</p>
                            <span>$12.99</span>
                        </div>
                            <img src={img1} className='special-img' alt='A delicious dish of greek salad'/>
                    </div>
                    <hr/>
                    <div className='special-content'>
                        <div>
                            <h3>Brushetta</h3>
                            <p>Our Brushetta is made from grilled bread that has been smeared with garlic</p>
                            <span>$7.99</span>
                        </div>
                            <img src={img2} className='special-img' alt='A delicious dish of brushetta'/>
                    </div>
                    <hr/>
                    <div className='special-content'>
                        <div>
                            <h3>Grilled Fish</h3>
                            <p>The famus greek salad of crispy lettuce, peppers, olives and our Chicago</p>
                            <span>$10.99</span>
                        </div>
                            <img src={img3} className='special-img' alt='A delicious dish of Fish'/>
                    </div>
                </div>
                <hr/>
            </div>
            
        </div>
    )
}

export default Specials