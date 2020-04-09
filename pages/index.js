import React from 'react'
import { Carousel } from 'antd'
import Link from 'next/link'
import Header from '@components/Header'
import ArticleList from '@components/ArticleList'
import Footer from '@components/Footer'

import '@css/pages/home.less'

import { getCarouselList } from '@api/carousel'
import { getArticleList } from '@api/article'

const Home = (props) => {

  const { carouselList, articleList } = props

  return (
    <div>
      <Header title="博客首页"></Header>

      <Carousel autoplay className="carousel-img-container">
        {carouselList.map((item, index) => {
          return (
            <div className="bg-image" key={index}>
              <style jsx>{`
                  .bg-image {
                    height: 100%;
                    background-image: url(${item.image_src});
                  }
                `}</style>

              <div className="container">
                <div className="title">
                  温暖日记 - Warm Diary
                </div>
                <div className="description">
                  记录你的最美时光
                </div>
                <div className="download">
                  <a href="https://apps.apple.com/cn/app/id1504446852">App Store 下载</a>
                </div>

                <div className="app-photo">
                  <img src="/image/2.png" alt="" />
                </div>
              </div>
            </div>
          )
        })}
      </Carousel>

      <ArticleList articleList={articleList}></ArticleList>

      <Footer></Footer>
    </div>
  )
}

Home.getInitialProps = async () => {
  const carouselList = await getCarouselList()
  const articleList = await getArticleList()

  return { carouselList, articleList }
}

export default Home
