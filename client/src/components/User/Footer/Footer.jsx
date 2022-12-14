// Componente footer con los datos rapidos 'domicilio' 'mail' 'telefono' etc
import React from 'react';
import { useNavigate } from "react-router-dom";
import './Footer.css';
/////*/

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
                    <div className='column1'>
                        {/* <h4 className='columnOne-title'>Developets TM</h4> */}
                        <ul className='list'>
                            <li> <a target='_blank' href={`https://api.whatsapp.com/send?phone=${celNumber}`} style={{'textDecoration': 'none', 'color': 'green'}}> <i class="bi bi-whatsapp text-green"></i></a></li>
                            <li> <a href='' style={{'textDecoration': 'none', 'color': 'blue'}}> <i class="bi bi-facebook"></i></a></li>
                            <li> <a href='' style={{'textDecoration': 'none', 'color': 'red'}}><i class="bi bi-instagram"></i></a></li>
                        </ul>
                    </div>
                    {/* Column2 */}
                    <div className='column2'>
                        {/* <h4 className='columnTwo-title'>Contact Us</h4> */}
                        <button className='buzonbtn' onClick={e => handleClick(e)}>Contact Us <i class="bi bi-envelope-paper"></i></button>
                        {/* <button className='buzonbtn' onClick={e => handleClick(e)}><i class="bi bi-envelope-paper"></i></button> */}
                    </div>
                    {/* Column3 */}
                    <div className='column3'>
                        <img className='cards-img' src={`https://aniversarioloves.es/wp-content/uploads/stripe_credit-card-logos.png`} alt='cards'/>
                    </div>
                </div>
            </div>
                    <hr/>
                    <div className='bottomfoot'>
                        <p className='fotter-text'>
                            &copy;{new Date().getFullYear()} <strong>DEVELOPETS TM</strong> | All rights reserved | <a href='' style={{'textDecoration': 'none'}}>Terms & Conditions</a>
                        </p>
                    </div>
            
        </div>
    )

}