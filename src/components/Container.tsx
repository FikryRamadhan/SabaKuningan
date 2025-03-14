import React from 'react';
import './Container.css';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <view className='Container'>{children}</view>;
};

export default Container;