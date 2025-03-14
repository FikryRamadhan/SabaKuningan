import './App.css'
import Container from './components/Container.tsx'
import MenuBar from './components/MenuBar.tsx'

export function App() {
  return (
    <view>
      <view className='Background' />
      <text className='Title'>Welcome to Our E-commerce Store!</text>
      <Container>
        <view className='ProductList'>
          <view className='ProductItem'>
            <text className='ProductName'>Product 1</text>
            <text className='ProductPrice'>$10.00</text>
          </view>
          <view className='ProductItem'>
            <text className='ProductName'>Product 2</text>
            <text className='ProductPrice'>$20.00</text>
          </view>
          <view className='ProductItem'>
            <text className='ProductName'>Product 3</text>
            <text className='ProductPrice'>$30.00</text>
          </view>
        </view>
      </Container>

      <MenuBar />
    </view>
  )
}