import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import About from '../components/About'
import Blog from '../components/Blog'
import Content from '../components/Content'

const Home = () => {
    return (
        <>
          <Header/>
          <Hero/>
          <About/>
          <Blog/>
          <Content/>
          <Footer/> 
          
        </>
    )
}

export default Home