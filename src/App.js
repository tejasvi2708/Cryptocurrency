import React from 'react'
import {Routes, Route, Link} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';
import{ Navbar, Homepage,News,CryptoDetails,Cryptocurrencies }from './components/index.js';
import './App.css';
const App = () => {
  return (
 <div className="div">
  <div className="navbar">
    <Navbar/>
  </div>
  <div className="main">
     <Layout>
      <div className="routes">
        <Routes> 
        <Route path="/" element={<Homepage />} />
        <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
        <Route path="/crypto/:coinId" element={<CryptoDetails />} />
        <Route path="/news" element={<News  />} />
         
        </Routes>
      </div>
     </Layout> 
  </div>
  <div className="footer" >
   <Typography.Title level={5} style={{color:'white', textAlign:'center'}}>
    Cryptoverse<br/>
    All rights reserved.
   </Typography.Title>
   <Space>
    <Link to='/'>Home</Link>
    <Link to='/news'>News</Link>
   </Space>
  </div>
 </div>
  )
}

export default App
