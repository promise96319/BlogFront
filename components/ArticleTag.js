import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import ArticleSideHeader from './ArticleSideHeader'

import { Row, Col, Tag } from 'antd'

import '@css/components/articleTag.less'

import { getTagList } from '@api/tag'

const ArticleTag = () => {
  const [tagList, setTagList] = useState([])
  const router = useRouter()
  useEffect(() => {
    const getData = async () => {
      const tagList = await getTagList()

      setTagList(tagList)
    }
    getData()
  }, [])

  return (
    <div className="article-tag">

      <ArticleSideHeader title="文章标签"></ArticleSideHeader>

      <div className="article-tag-content">
        <Row type="flex" justify="start" align="top" gutter={[4, 12]}>
          {tagList.map((item, index) => {
            return (
              <Col
                key={index}
                className={
                  router.query.tagID == item.id
                    ? 'tag-name selected'
                    : 'tag-name'
                }
                onClick={() => {
                  router.push({
                    pathname: '/articles/list',
                    query: { tagID: item.id }
                  })
                }}
              >
                <Tag>{item.tag_name}</Tag>
              </Col>
            )
          })}
        </Row>
      </div>
    </div>
  )
}

export default ArticleTag
