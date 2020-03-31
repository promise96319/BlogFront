import React from 'react'
import Router from 'next/router'

import { Row, Col } from 'antd'

import ArticleCard from './ArticleCard'
import ArticleCategory from './ArticleCategory'
import ArticleTag from './ArticleTag'

import '../static/css/components/articleList.css'

const ArticleList = props => {
  const { articleList } = props

  return (
    <main className="main-content">
      <Row type="flex" justify="space-between" gutter={0}>
        <Col className="content-left" xs={24} sm={24} md={16} lg={18} xl={18}>
          <Row type="flex" justify="start" align="top" gutter={[28, 28]}>
            {articleList.map((item, index) => {
              return (
                <Col
                  xs={24}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={8}
                  key={index}
                  onClick={() => {
                    Router.push({
                      pathname: '/articles/detail',
                      query: { id: item.id }
                    })
                  }}
                >
                  <ArticleCard articleDetail={item}></ArticleCard>
                </Col>
              )
            })}
          </Row>
        </Col>
        <Col className="content-right" xs={0} sm={0} md={7} lg={5} xl={5}>
          <ArticleCategory></ArticleCategory>
          <ArticleTag></ArticleTag>
        </Col>
      </Row>
    </main>
  )
}

export default ArticleList
