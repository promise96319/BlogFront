import React from 'react'

import { Row, Col, Icon, Tag } from 'antd'

import '../static/css/components/articleCard.css'

const ArticleCard = () => {
  return (
    <div className="article-card">
      <div className="card-img-container">
        <style jsx>{`
          .card-img-container {
            background-image: url(/static/image/home1.jpg);
          }
        `}</style>
      </div>

      <div className="card-intro-container">
        <div className="card-title">一门新的语言-pyhton</div>
        <Row className="card-property" type="flex" justify="start" align="middle" gutter={16}>
          <Col>
            <Icon type="calendar" />
            2020-01-02
          </Col>
          <Col>
            <Icon type="folder" />
            视频教程
          </Col>
          <Col>
            <Icon type="fire" />
            2020
          </Col>
        </Row>
          <div className="card-intro">
            这是一门非常好的语言，我非常的喜欢他，你也可以学习，大家一起学多好
          </div>

        <Row className="card-tag" type="flex" justify="start" align="middle">
          <Col><Tag>css</Tag></Col>
          <Col><Tag>技术</Tag></Col>
          <Col><Tag>教程啊</Tag></Col>
          <Col><Tag>图文</Tag></Col>
          </Row>
      </div>
    </div>
  )
}

export default ArticleCard
