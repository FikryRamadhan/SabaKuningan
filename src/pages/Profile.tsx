import React from 'react';
import MenuBar from '../Components/MenuBar.tsx';
import ProfileImage from '../Assets/menus/user.png'; // Make sure to replace this with the actual path to your profile image
import './Css/Profile.css';

const Profile = () => {
    return (
        <view className='ProfilePage'>
            <view className='Background' />
            <view className='ProfileHeader'>
                <image src={ProfileImage} className='ProfileImage' />
                <text className='ProfileTitle'>John Doe</text>
            </view>
            <view className='ProfileContent'>
                <view className='PersonalInfo'>
                    <text className='SectionTitle'>Personal Information</text>
                    <text className='InfoItem'>Email: john.doe@example.com</text>
                    <text className='InfoItem'>Phone: +1234567890</text>
                </view>
                <view className='TravelHistory'>
                    <text className='SectionTitle'>Travel History</text>
                    <view className='HistoryItem'>
                        <text className='HistoryTitle'>Trip to Bali</text>
                        <text className='HistoryDate'>Date: January 2023</text>
                    </view>
                    <view className='HistoryItem'>
                        <text className='HistoryTitle'>Trip to Paris</text>
                        <text className='HistoryDate'>Date: June 2022</text>
                    </view>
                    <view className='HistoryItem'>
                        <text className='HistoryTitle'>Trip to New York</text>
                        <text className='HistoryDate'>Date: December 2021</text>
                    </view>
                </view>
            </view>
            <MenuBar />
        </view>
    );
};

export default Profile;