import React, { useEffect } from 'react'

import Head from 'next/head'

import { Row, Col, Icon, Affix, BackTop } from 'antd'
import hljs from 'highlight.js'
import marked from 'marked'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Tocify from '../../components/tocify.tsx'
import ArticleSideHeader from '../../components/ArticleSideHeader'

import { getArticleList } from '../../api/article'

import '../../static/css/pages/articleDetail.css'
import 'highlight.js/styles/monokai-sublime.css'

const ArticleDetail = props => {
  const {
    title,
    description,
    author_name,
    add_time,
    image_src,
    category_name,
    content
  } = props.articleDetail

  const tocify = new Tocify()
  const renderer = new marked.Renderer()
  renderer.heading = function(text, level, raw) {
    const anchor = tocify.add(text, level)
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`
  }

  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function(code) {
      return hljs.highlightAuto(code).value
    }
  })

  let html = marked(content)

  return (
    <div className="article-detail">
      <BackTop></BackTop>
      <Head>
        <title>文章详情</title>
      </Head>

      <Header isInDiv={true}></Header>

      <Row className="article-detail-container" type="flex" justify="center">
        <Col
          className="article-detail-content"
          xs={24}
          sm={24}
          md={16}
          lg={18}
          xl={18}
        >
          <div className="title">{title}</div>

          <div className="icons">
            <span>
              <Icon type="calendar" /> {new Date(add_time).toLocaleDateString()}
            </span>
            <span>
              <Icon type="folder" /> {category_name}
            </span>
            <span>
              <Icon type="fire" /> {author_name}
            </span>
          </div>

          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
        </Col>

        <Col
          className="article-detail-catalog"
          xs={0}
          sm={0}
          md={8}
          lg={6}
          xl={6}
        >
          <Affix offsetTop={10}>
            <ArticleSideHeader title="文章目录"></ArticleSideHeader>
            <div className="toc-list">{tocify && tocify.render()}</div>
          </Affix>
        </Col>
      </Row>

      <Footer></Footer>
    </div>
  )
}

ArticleDetail.getInitialProps = async context => {
  const articleDetail = await getArticleList({ id: context.query.id })
  return { articleDetail }
}

export default ArticleDetail
