import React from 'react'
import './Css/WisataCard.css'

interface WisataCardProps {
    image: string
    rating: number
    title: string
}

const WisataCard : React.FC<WisataCardProps> = ({image, rating, title}) => {
    return (
        <view class="wisata-card">
            <image src={image} class="wisata-image" />
            <view class="wisata-info">
                <text class="wisata-title">{title}</text>
                <view class="wisata-rating">
                    <text>{rating}/5</text>
                </view>
            </view>
        </view>
    )
}

export default WisataCard