import React, { useState } from 'react';
import MenuBar from '../Components/MenuBar.tsx';
import Header from '../Components/Header.tsx';
import './Explore.css';

const Explore = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    return (
        <view>
            <view className='Background' />
            <Header
                title="Jelajahi Tempat Menarik"
                description="Temukan destinasi terbaru dan rekomendasi terbaik di Kabupaten Kuningan, Jawa Barat."
            />
            <view className='SearchContainer'>
                <input
                    type='text'
                    className='SearchInput'
                    placeholder='Cari destinasi...'
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </view>
            <MenuBar />
        </view>
    );
};

export default Explore;