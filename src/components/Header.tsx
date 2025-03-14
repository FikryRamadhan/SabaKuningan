import React from 'react'
import './Css/Header.css'

interface HeaderProps {
  title: string;
  description: string;
}

const Header: React.FC<HeaderProps> = ({ title, description }) => {
  return (
    <view className="card">
    <view className="header">
      <text className="title">{title}</text>
      <text className="description">
        {description}
      </text>
    </view>
  </view>
  )
}

export default Header