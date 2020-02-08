import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { Row, Col, Menu, Icon, Affix } from 'antd'
import '../static/css/components/header.css'

const Header = (props) => {
  const [isScrolled, setScrolled] = useState(false)

  const didScrolled = (e) => {
    if (e) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  let headerClassName = 'header'
  let headerStyle = {}
  if (props.isFixed) {
    headerStyle = {
      top: 0,
      left: 0,
    }
    headerClassName = 'header scrolled'
  } else {
    headerStyle = {
      position: 'absolute',
      top: 20,
      left: 0,
    }
    headerClassName = isScrolled ? 'header scrolled' : 'header'
  }

  return (
    <Affix style={{ ...headerStyle, zIndex: 999, width: "100%", }} onChange={didScrolled}>
      <div className={headerClassName}>
        <div className="header-content">
          <Row type="flex" justify="space-between" align="middle">
            <Col>
              <Link href={{pathname:'/'}}><a className="header-txt">Silence</a></Link>
            </Col>
            <Col>
              <Menu mode="horizontal">
                <Menu.Item key="home">
                  {/* <Icon type="home" /> */}
                  首页
                </Menu.Item>
                <Menu.Item key="home1">
                  {/* <Icon type="home" /> */}
                  作品
                </Menu.Item>
                <Menu.Item key="home2">
                  {/* <Icon type="home" /> */}
                  文章
                </Menu.Item>
                <Menu.Item key="home3">
                  {/* <Icon type="home" /> */}
                  关于我
                </Menu.Item>
              </Menu>
            </Col>
          </Row>
        </div>
      </div>
    </Affix>
  )
}

export default Header
