import React from 'react'
import MenuBar from '../Components/MenuBar.tsx'
import './Css/Home.css'
import Header from '../Components/Header.tsx'
import CardOption from '../Components/CardOption.tsx'
const Home = () => {
    return (
        <view>
            <view className='Background' />
            <Header
                title="Selamat Datang Saba Kuningan"
                description="Jelajahi keindahan dan tempat-tempat menarik di Kabupaten Kuningan, Jawa Barat."
            />
            <CardOption />
            <MenuBar />
        </view>
    )
}

export default Home