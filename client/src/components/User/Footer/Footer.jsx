// Componente footer con los datos rapidos 'domicilio' 'mail' 'telefono' etc
import React from 'react';
import { useNavigate } from "react-router-dom";
import './Footer.css';


export default function Footer() {
    const celNumber = 3512609032;
    const navigate = useNavigate();

    function handleClick(e){
        e.preventDefault();
        navigate('/aboutus');
    }

    return (
        <div className='mainFooter'>
            <div className='footer-container'>
                <div className='columns-row'>
                    {/* Column1 */}
                    <div>
                        <h4>Pets Love TM</h4>
                        <ul>
                            <li>Whatsapp <a href={`https://api.whatsapp.com/send?phone=${celNumber}`} style={{'textDecoration': 'none', 'color': 'green'}}> <i class="bi bi-whatsapp text-green"></i></a></li>
                            <li>Facebook <a href='' style={{'textDecoration': 'none', 'color': 'blue'}}> <i class="bi bi-facebook"></i></a></li>
                            <li>Instagram <a href='' style={{'textDecoration': 'none', 'color': 'red'}}><i class="bi bi-instagram"></i></a></li>
                        </ul>
                    </div>
                    {/* Column2 */}
                    <div>
                        <h4>Contact Us</h4>

                        <button onClick={e => handleClick(e)}><i class="bi bi-envelope-paper"></i></button>

                    </div>
                    {/* Column3 */}
                    <div>
                        <img className='cards-img' src={`https://aniversarioloves.es/wp-content/uploads/stripe_credit-card-logos.png`} alt='cards'/>
                    </div>

                </div>
                    <hr/>
                    <div>
                        <p>
                            &copy;{new Date().getFullYear()} <strong>PETS LOVE TM</strong> | All rights reserved | <a href='' style={{'textDecoration': 'none'}}>Terms & Conditions</a>
                        </p>
                    </div>
            </div>
        </div>
    )

}