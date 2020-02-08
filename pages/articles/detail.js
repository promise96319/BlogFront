import React, { useEffect } from 'react'

import Head from 'next/head'

import { Row, Col, Icon, Affix } from 'antd'
import hljs from 'highlight.js'
import marked from 'marked'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Tocify from '../../components/tocify.tsx'
import ArticleSideHeader from '../../components/ArticleSideHeader'

import '../../static/css/pages/articleDetail.css'
import 'highlight.js/styles/monokai-sublime.css'

const ArticleDetail = () => {
  console.log(hljs)

  const content =
    '# P01:课程介绍和环境搭建\n' +
    '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
    '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
    '**这是加粗的文字**\n\n' +
    '*这是倾斜的文字*`\n\n' +
    '***这是斜体加粗的文字***\n\n' +
    '~~这是加删除线的文字~~ \n\n' +
    '`console.log(111)` \n\n' +
    '# p02:来个Hello World 初始Vue3.0\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n' +
    '***\n\n\n' +
    '# p03:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '# p04:Vue3.0基础知识讲解\n' +
    '```' +
    'const a = b' +
    '```' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '#5 p05:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '# p06:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '[clear everything](/demo/?text=)' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '# p07:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '``` var a=11; ' +
    'const a = b' +
    'function a()'
  ;('```')

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
      <Head>
        <title>文章详情</title>
      </Head>

      <Header isFixed={true}></Header>

      <Row className="article-detail-container" type="flex" justify="center">
        <Col
          className="article-detail-content"
          xs={24}
          sm={24}
          md={16}
          lg={18}
          xl={18}
        >
          <div className="title">大标题啊啊</div>

          <div className="icons">
            <span>
              <Icon type="calendar" /> xxdeoX
            </span>
            <span>
              <Icon type="folder" /> dddd
            </span>
            <span>
              <Icon type="fire" /> ddd
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
          <Affix offsetTop={60}>
            <ArticleSideHeader title="文章目录"></ArticleSideHeader>
            <div className="toc-list">{tocify && tocify.render()}</div>
          </Affix>
        </Col>
      </Row>

      <Footer></Footer>
    </div>
  )
}

export default ArticleDetail
