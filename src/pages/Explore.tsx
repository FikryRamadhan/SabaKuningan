import React from 'react'
import MenuBar from '../Components/MenuBar.tsx'
import Header from '../Components/Header.tsx'

const Explore = () => {
    return (
        <view>
            <view className='Background' />
            <Header
                title="Jelajahi Tempat Menarik"
                description="Temukan destinasi terbaru dan rekomendasi terbaik di Kabupaten Kuningan, Jawa Barat."
            />
            <MenuBar />
        </view>
    )
}

export default Explore