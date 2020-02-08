import React from 'react'

import { Row, Col } from 'antd'

import ArticleSideHeader from './ArticleSideHeader'

import '../static/css/components/articleCategory.css'

const ArticleCategory = () => {
  const data = ['技术文章', '多视屏', '数值统计类','技术文章', '多视屏', '数值统计类', '数学参考']
  return (
    <div className="article-category">
      <ArticleSideHeader title="文章分类"></ArticleSideHeader>
      <div className="article-category-content">
        <Row type="flex" justify="start" align="top" gutter={[0, 20]}>
          {data.map((item, index) => {
            return (
              <Col className="category-name" span={24} key={index}>
                {item}
              </Col>
            )
          })}
        </Row>
      </div>
    </div>
  )
}

export default ArticleCategory
