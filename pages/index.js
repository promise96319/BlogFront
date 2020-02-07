import React from 'react'
import Head from 'next/head'

import { Carousel } from 'antd'

import Header from '../components/Header'
import '../static/css/pages/home.css'

const Home = () => {
  return (
    <div>
      <Head>
        <title>博客首页 | 一个渺小的独立开发者</title>
      </Head>

      <Header></Header>

      <Carousel autoplay className="img-container">
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

        {/* <div>
          <img src="../static/image/home2.jpg" alt="" />
        </div>
        <div>
          <img src="../static/image/home3.jpg" alt="" />
        </div>
        <div>
          <img src="../static/image/home2.jpg" alt="" />
        </div> */}
      </Carousel>

      <div className="content">djdjdj</div>
    </div>
  )
}

export default Home
