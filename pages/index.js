import React from 'react'
import Head from 'next/head'

import { Carousel } from 'antd'

import Header from '../components/Header'
import ArticleList from '../components/ArticleList'
import Footer from '../components/Footer'

import '../static/css/pages/home.css'

import { getCarouselList } from '../api/carousel'

const Home = (props) => {

  const { carouselList } = props
  
  
  return (
    <div>
      <Head>
        <title>博客首页 | 一个渺小的独立开发者</title>
      </Head>

      <Header></Header>

      <Carousel autoplay className="carousel-img-container">
        {carouselList.map((item, index) => {
          return (
            <div key={index}>
              <style jsx>{`
                div {
                  background-image: url(${item.image_src});
                }
              `}</style>
            </div>
          )
        })}
      </Carousel>

      <ArticleList></ArticleList>

      <Footer></Footer>
    </div>
  )
}

Home.getInitialProps = async (context) => {

  const carouselList = await getCarouselList()
  
  return { carouselList }
}

export default Home
