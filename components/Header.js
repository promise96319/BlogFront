import React, { useState, useEffect } from 'react'

import { Row, Col, Menu, Icon, Affix } from 'antd'
import '../static/css/components/header.css'

const Header = () => {
  const [isScrolled, setScrolled] = useState(false)

  const didScrolled = (e) => {
    if (e) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  // useEffect(() => {
  // }, [])

  return (
    <Affix style={{ position: 'absolute', top: 20, left: 0, zIndex: 999, width: "100%", }} onChange={didScrolled}>
      <div className={isScrolled ? 'header scrolled' : 'header'}>
        <div className="header-content">
          <Row type="flex" justify="space-between" align="middle">
            <Col>
              <span className="header-txt">Silence</span>
            </Col>
            <Col>
              <Menu mode="horizontal">
                <Menu.Item key="home">
                  <Icon type="home" />
                  博客首页1
                </Menu.Item>
                <Menu.Item key="home1">
                  <Icon type="home" />
                  博客首页2
                </Menu.Item>
                <Menu.Item key="home2">
                  <Icon type="home" />
                  博客首页3
                </Menu.Item>
                <Menu.Item key="home3">
                  <Icon type="home" />
                  博客首页4
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
