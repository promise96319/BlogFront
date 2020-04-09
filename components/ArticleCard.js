import React from 'react'

import Router from 'next/router'
import { Row, Col, Icon, Tag } from 'antd'

import '@css/components/articleCard.less'

const ArticleCard = props => {
  const { articleDetail } = props
  const {
    title,
    description,
    image_src,
    author_name,
    category_name,
    add_time,
    tags
  } = articleDetail

  return (
    <div className="article-card">
      <div className="card-img-container">
        <style jsx>{`
          .card-img-container {
            background-image: url(${image_src});
          }
        `}</style>
      </div>

      <div className="card-intro-container">
        <div className="card-title">{title}</div>
        <Row
          className="card-property"
          type="flex"
          justify="start"
          align="middle"
          gutter={16}
        >
          <Col>
            <Icon type="calendar" />
            {new Date(add_time).toLocaleDateString()}
          </Col>
          <Col>
            <Icon type="folder" />
            {category_name}
          </Col>
          <Col>
            <Icon type="edit"></Icon>
            {author_name}
          </Col>
        </Row>
        <div className="card-intro">{description}</div>

        <Row className="card-tag" type="flex" justify="start" align="middle">
          {tags.slice(0, 5).map((item, index) => (
            <Col key={index}>
              <Tag>{item}</Tag>
              {/* onClick={(event) => {           
              Router.push({
                pathname: '/articles/list',
                query: { tagID: item.id }
              })
              event.cancelBubble = true
              event.stopPropagation()
              }} */}
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default ArticleCard
