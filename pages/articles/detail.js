import React, { useEffect } from 'react'

import Head from 'next/head'

import { Row, Col, Icon, Affix, BackTop } from 'antd'
import hljs from 'highlight.js'
import marked from 'marked'

import Header from '@components/Header'
import Footer from '@components/Footer'
import Tocify from '@components/tocify.tsx'
import ArticleSideHeader from '@components/ArticleSideHeader'

import { getArticleList } from '@api/article'

import '@css/pages/articleDetail.less'
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
  renderer.heading = function (text, level, raw) {
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
    highlight: function (code) {
      return hljs.highlightAuto(code).value
    }
  })

  let html = marked(content)

  return (
    <div className="article-detail">

      <div className="detial-img "></div>
      <style jsx>{`
                  .detial-img  {
                    height: 100%;
                    background-size: cover;
                    background-image: url(https://app.dairy.qinguanghui.com/22_landscape-2990060_1920.jpg );
                  }
                `}</style>
{/* https://app.dairy.qinguanghui.com/22_landscape-2990060_1920.jpg 
https://app.dairy.qinguanghui.com/8_sean-o-KMn4VEeEPR8-unsplash.jpg*/}
      <BackTop></BackTop>

      <Header title={title} isInDiv={true}></Header>

      <div className="main">
        <div className="left">
          <div className="background"></div>
          <Affix offsetTop={24}>

            {/* <ArticleSideHeader title={title}></ArticleSideHeader> */}
            <div className="toc-list">{tocify && tocify.render()}</div>
          </Affix>
        </div>
        <div className="right">
          <div className="background"></div>

          <div>
          <div className="title">{title}</div>

            <div className="icons">
              <span>
                <Icon type="calendar" /> {new Date(add_time).toLocaleDateString()}
              </span>
              <span>
                <Icon type="folder" /> {category_name}
              </span>
              <span>
                <Icon type="edit" /> {author_name}
              </span>
            </div>

            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: html }}
            ></div>
          </div>
        </div>
      </div>

      <Footer isLight={true}></Footer>
    </div>
  )
}

ArticleDetail.getInitialProps = async context => {
  const articleDetail = await getArticleList({ id: context.query.id })
  return { articleDetail }
}

export default ArticleDetail
