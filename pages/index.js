import React from 'react'
import { Carousel } from 'antd'

import Header from '@components/Header'
import ArticleList from '@components/ArticleList'
import Footer from '@components/Footer'

import '@css/pages/home.less'

import { getCarouselList } from '@api/carousel'
import { getArticleList } from '@api/article'

const Home = (props) => {
  console.log(props);
  
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
                  background-image: url(${item.image_src});
                }
              `}</style>
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
