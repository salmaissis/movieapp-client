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
                    <li className={`${pathname == '/' ? 'active' : ''}`}><Link to="/">Home</Link></li>
                    <li className={`${pathname == '/movie' ? 'active' : ''}`}><Link to="/movie">Movies</Link></li>
                    <li className={`${pathname == '/tv' ? 'active' : ''}`}><Link to="/tv">TV Series</Link></li>
                    <li className={`${pathname == '/favorites' ? 'active' : ''}`}><Link to="/favorites">Favorites</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
