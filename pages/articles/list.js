import React from 'react'
import Head from 'next/head'

import Header from '../../components/Header'
import ArticleList from '../../components/ArticleList'
import Footer from '../../components/Footer'

import '../../static/css/pages/articleList.css'

const ArticleListPage = () => {
  return (
    <div className="article-list">
      <Head>
        <title>文章列表</title>
      </Head>

      <Header isFixed={true}></Header>

      <ArticleList></ArticleList>

      <Footer></Footer>
    </div>
  )
}

export default ArticleListPage