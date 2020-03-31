import React from 'react'
import Head from 'next/head'

import Header from '../../components/Header'
import ArticleList from '../../components/ArticleList'
import Footer from '../../components/Footer'

import '../../static/css/pages/articleList.css'
import { getArticleList } from '../../api/article'

const ArticleListPage = props => {
  const { articleList } = props

  return (
    <div className="article-list">
      <Head>
        <title>文章列表</title>
      </Head>

      <Header isFixed={true}></Header>

      <ArticleList articleList={articleList}></ArticleList>

      <Footer></Footer>
    </div>
  )
}

ArticleListPage.getInitialProps = async context => {
  const { categoryID, tagID } = context.query
  let params = {}
  if (categoryID) {
    params = { categoryID: Number(categoryID) }
  } else if (tagID) {
    params = { tagID: Number(tagID) }
  } else {
    params = {}
  }
  
  const result = await getArticleList(params)

  return { articleList: result || [] }
}

export default ArticleListPage
