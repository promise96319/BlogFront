import React from 'react'
import Router from 'next/router'

import { Row, Col } from 'antd'

import ArticleCard from './ArticleCard'
import ArticleCategory from './ArticleCategory'
import ArticleTag from './ArticleTag'

import '@css/components/articleList.less'

const ArticleList = props => {
  const { articleList } = props

  return (
    <main className="main-content">
      <Row type="flex" justify="space-between" gutter={0}>
        <Col className="content-left" xs={24} sm={24} md={18} lg={18} xl={18}>
          <Row type="flex" justify="start" align="top" gutter={[24, 24]}>
            {articleList.map((item, index) => {
              return (
                <Col
                  xs={24}
                  sm={12}
                  md={8}
                  lg={8}
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
        <Col className="content-right" xs={0} sm={0} md={6} lg={6} xl={6}>
          <ArticleCategory></ArticleCategory>
          <ArticleTag></ArticleTag>
        </Col>
      </Row>
    </main>
  )
}

export default ArticleList
