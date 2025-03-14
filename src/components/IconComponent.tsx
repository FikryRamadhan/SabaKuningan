import React from 'react'
import './Css/IconComponent.css'

interface IconComponentProps {
    icon: string;
    label: string;
}

const IconComponent: React.FC<IconComponentProps> = ({label, icon}) => {
    return (
        <view className="category">
            <image src={icon} className='icon'/>
            <text className='categoryText'>{label}</text>
        </view>
    )
}

export default IconComponent