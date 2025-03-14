import React from 'react'
import IconComponent from './IconComponent.tsx'
import WisataIcon from "../Assets/icon/wisata.png"
import KulinerIcon from "../Assets/icon/food.png"
import BelanjaIcon from "../Assets/icon/shoping.png"
import HotelIcon from "../Assets/icon/hotel.png"
import all from "../Assets/icon/all.png"
import homes from "../Assets/icon/homes.png"

import "./Css/CardOption.css"

const CardOption = () => {
    return (
        <view className="cardCategory">
            <view className="headerCategory">
                <text className="title">Kategori</text>
                <text className="description">
                    Pilih kategori yang ingin Anda jelajahi
                </text>
            </view>
            <view className="categories">
                <IconComponent icon={WisataIcon} label="Wisata" />
                <IconComponent icon={KulinerIcon} label="Kuliner" />
                <IconComponent icon={BelanjaIcon} label="Belanja" />
                <IconComponent icon={HotelIcon} label="Hotel" />
            </view>
            <view className="categories2">
                <IconComponent icon={homes} label="Kost" />
                <IconComponent icon={all} label="Semua" />
            </view>
        </view>
    )
}

export default CardOption