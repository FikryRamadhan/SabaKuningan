import React, { useState, useEffect } from 'react';
import './Css/MenuBar.css';
import HomeIcon from "../Assets/menus/home.png";
import ExploreIcon from "../Assets/menus/explore.png";
import UserIcon from "../Assets/menus/user.png";
import { useNavigate, useLocation } from 'react-router';

const MenuBar = () => {
    const [activeItem, setActiveItem] = useState('home');
    const nav = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        if (path === '/') {
            setActiveItem('home');
        } else if (path === '/explore') {
            setActiveItem('explore');
        } else if (path === '/profile') {
            setActiveItem('user');
        }
    }, [location.pathname]);

    return (
        <view className='BottomMenu'>
            <text
                className={`MenuItem ${activeItem === 'home' ? 'active' : ''}`}
                bindtap={() => { nav('/'); setActiveItem('home'); }}
            >
                <image src={HomeIcon} className='MenuIcon' />
            </text>
            <text
                className={`MenuItem ${activeItem === 'explore' ? 'active' : ''}`}
                bindtap={() => { nav("/explore"); setActiveItem('explore'); }}
            >
                <image src={ExploreIcon} className='MenuIcon' />
            </text>
            <text
                className={`MenuItem ${activeItem === 'user' ? 'active' : ''}`}
                bindtap={() => { nav("/profile"); setActiveItem('user'); }}
            >
                <image src={UserIcon} className='MenuIcon' />
            </text>
        </view>
    );
};

export default MenuBar;