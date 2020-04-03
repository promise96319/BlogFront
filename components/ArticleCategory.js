import React, { useState } from 'react'
import {useRouter} from 'next/router'

import { Row, Col } from 'antd'

import ArticleSideHeader from './ArticleSideHeader'

import '@css/components/articleCategory.less'

import { getCategoryList } from '@api/category'
import { useEffect } from 'react'

const ArticleCategory = () => {
  const [categoryList, setCategoryList] = useState([])
  const router = useRouter()

  useEffect(() => {
    const getData = async() => {
      const categoryList = await getCategoryList()
      
      setCategoryList(categoryList)
    }
    getData()
  }, [])

  return (
    <div className="article-category">
      
      <ArticleSideHeader title="文章分类"></ArticleSideHeader>

      <div className="article-category-content">
        <Row type="flex" justify="start" align="top" gutter={[0, 20]}>
          {categoryList.map((item, index) => {
            return (
              <Col className={router.query.categoryID == item.id ? "category-name selected" : "category-name"} span={24} key={index} onClick={
                () => {
                  router.push({
                    pathname: '/articles/list',
                    query: { categoryID: item.id }
                  })
                }
              }>
                {item.category_name}
              </Col>
            )
          })}
        </Row>
      </div>
    </div>
  )
}

export default ArticleCategory
