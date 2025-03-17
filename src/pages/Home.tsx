import React from 'react'
import MenuBar from '../Components/MenuBar.tsx'
import './Css/Home.css'
import Header from '../Components/Header.tsx'
import CardOption from '../Components/CardOption.tsx'
import WisataCard from '../Components/WisataCard.tsx'
import data from '../Hooks/Data.ts'


const Home = () => {
    const dataTerbaik = data.filter((item) => item.rating >= 4.5)
    const dataTerbaru = data.filter((item) => item.id <= 5)
    const dataSemua = data.filter((item) => item.id <= 10)

    return (
        <scroll-view
            className='home-page Background'
        >
            <Header
                title="Selamat Datang Saba Kuningan"
                description="Jelajahi keindahan dan tempat-tempat menarik di Kabupaten Kuningan, Jawa Barat."
            />
            <CardOption />
            <view class="wisata-page">
                <view class="section">
                    <text class="section-title">Terbaik</text>
                    <scroll-view scroll-orientation='horizontal' className="wisata-row" style={{ gap: 10 }}>
                        {dataTerbaik.map((item) => (
                            <WisataCard
                                key={item.id}
                                image={item.image}
                                title={item.name}
                                rating={item.rating}

                            />
                        ))}
                    </scroll-view>
                </view>

                <view class="section">
                    <text class="section-title">Terbaru</text>
                    <scroll-view scroll-orientation='horizontal' className="wisata-row" style={{ gap: 10 }}>
                        {dataTerbaru.map((item) => (
                            <WisataCard
                                key={item.id}
                                image={item.image}
                                title={item.name}
                                rating={item.rating}
                            />
                        ))}
                    </scroll-view>
                </view>

                <view class="section">
                    <text class="section-title">Semua</text>
                    <scroll-view scroll-orientation='horizontal' className="wisata-row" style={{ gap: 10 }}>
                        {dataSemua.map((item) => (
                            <WisataCard
                                key={item.id}
                                image={item.image}
                                title={item.name}
                                rating={item.rating}
                            />
                        ))}
                    </scroll-view>
                </view>
            </view>
            <MenuBar />
        </scroll-view>
    )
}

export default Home