import React, { createContext, useContext } from 'react'

import { Icon } from 'antd'

import '@css/components/articleSideHeader.less'


const ArticleSideHeader = (props) => {
  return (
    <div className="article-side-header">
      <span className="aritcle-blank"></span>
      <span className="header-title">{props.title}</span>
    </div>
  )
}

export default ArticleSideHeader