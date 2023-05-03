import React, { useRef, useEffect } from 'react';

import { Link } from 'react-router-dom';

import './header.scss';

import logo from '../../assets/tmovie.png';

const Header = () => {

    const { pathname } = window.location;
    const headerRef = useRef(null);

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        }
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    return (
        <div ref={headerRef} className="header">
            <div className="header__wrap container">
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <Link to="/">MovieApp</Link>
                </div>
                <ul className="header__nav">
                    <li><Link to="/" className={`${pathname == '/' ? 'active' : ''}`}>Home</Link></li>
                    <li><Link to="/movie" className={`${pathname == '/movie' ? 'active' : ''}`}>Movies</Link></li>
                    <li><Link to="/tv" className={`${pathname == '/tv' ? 'active' : ''}`}>TV Series</Link></li>
                    <li><Link to="/login" className={`${pathname == '/login' ? 'active' : ''}`}>Login</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
