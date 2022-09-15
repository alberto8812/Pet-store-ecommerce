import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css'
import SearchBar from './SearchBar';
import { Icon } from '@iconify/react';
<Icon icon="bx:home" />

const NavBar = () => {

    return (
        <div>
            <div className='nav-body'>
                <div className='nav-header'>
                    <Link to='/' className='nav-link' >
                        <Icon className='ico_nav' icon="bx:home" width='30px' height='30px' />
                        <h3 className='link_home'>Home</h3>
                    </Link>
                </div>
                <div>
                    <SearchBar />
                </div>
                <div className='nav_box'>
                    <div className='nav_selec'>
                        <Icon icon="emojione-v1:cat-face" width='30px' height='30px' />
                        <h3 className='link_home'>Cat</h3>
                    </div>
                    <div className='nav_selec'>
                        <Icon icon="emojione-v1:dog-face" width='30px' height='30px' />
                        <h3 className='link_home'>Dog</h3>
                    </div>
                </div>
                <div className='nav_box'>
                    <Link to='/' className='nav-link' >
                        <Icon icon="fa:shopping-cart" width='30px' height='30px' />
                        <h3 className='link_home'>shopping</h3>
                    </Link>
                    <Link to='/' className='nav-link' >
                        <Icon icon="ic:outline-favorite"  width='30px' height='30px' />
                        <h3 className='link_home'>Favorite</h3>
                    </Link>
                    <div>
                    <Link to='/' className='nav-link' >
                        <Icon icon="healthicons:ui-user-profile" width='30px' height='30px' />
                        <h3 className='link_home'>Profile</h3>
                    </Link>
                    </div>
                </div>
            </div>
            <nav role="navigation">
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                        <div className='linkes'>
                            <Link className='nav-link' to='/'><h3>Home</h3></Link>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>

    );
}

export default NavBar;