import React from 'react'

import ArticleSideHeader from './ArticleSideHeader'

import { Row, Col, Tag } from 'antd'

import '../static/css/components/articleTag.css'

const ArticleTag = () => {
  const data = ['技术文章', '多视屏', '数值统计类','技术文章', '多视屏', '数值统计类', '数学参考','技术文章', '多视屏', '数值统计类','技术文章','技术文章', '多视屏', '数值统计类','技术文章','技术文章', '多视屏', '数值统计类','技术文章','技术文章', '多视屏', '数值统计类','技术文章','技术文章', '多视屏', '数值统计类','技术文章']

  return (
    <div className="article-tag">
      <ArticleSideHeader title="文章标签"></ArticleSideHeader>
      <div className="article-tag-content">
        <Row type="flex" justify="start" align="top" gutter={[8, 12]}>
          {
            data.map((item, index) => {
              return (
                <Col key={index}>
                <Tag>{item}</Tag>
              </Col>
              )
            })
          }
        </Row>
      </div>
    </div>
  )
}

export default ArticleTag