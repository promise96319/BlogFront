import React from 'react'
import Head from 'next/head'

import { Carousel } from 'antd'

import Header from '../components/Header'
import ArticleList from '../components/ArticleList'
import Footer from '../components/Footer'

import '../static/css/pages/home.css'

const Home = () => {
  return (
    <div>
      <Head>
        <title>博客首页 | 一个渺小的独立开发者</title>
      </Head>

      <Header></Header>

      <Carousel autoplay className="carousel-img-container">
        {[1, 2, 3].map((item, index) => {
          return (
            <div key={index}>
              <style jsx>{`
                div {
                  background-image: url(/static/image/home${index+1}.jpg);
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

export default Home
