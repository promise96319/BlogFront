import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Router from 'next/router'

import { Row, Col, Menu, Icon, Affix } from 'antd'
import '../static/css/components/header.css'

const Header = props => {
	// 判断是否已经滑动，默认是没有滑动的状态
	const [isScrolled, setScrolled] = useState(false)
	// isFixed 判断是否固定在头部显示，
	// isInDiv 判断是否在 div 内部显示
	const { isFixed, isInDiv } = props

	const didScrolled = e => {
		if (e) {
			setScrolled(true)
		} else {
			setScrolled(false)
		}
	}

	let headerClassName = 'header'
	let headerStyle = {}
	if (isFixed) {
		headerStyle = {
			top: 0,
			left: 0
		}
		headerClassName = 'header scrolled'
	} else {
		headerStyle = {
			position: 'absolute',
			top: 20,
			left: 0
		}
		headerClassName = isScrolled ? 'header scrolled' : 'header'
	}

	const commonHeader = (
		<div className='header-content'>
			<Row type='flex' justify='space-between' align='middle'>
				<Col>
					<Link href={{ pathname: '/' }}>
						<a className='header-txt'>Silence</a>
					</Link>
				</Col>
				<Col>
					<Menu mode='horizontal'>
						<Menu.Item key='home' onClick={() => {}}>
							{/* <Icon type="home" /> */}
							首页
						</Menu.Item>
						{/* <Menu.Item key="home1">

            作品
          </Menu.Item> */}
						<Menu.Item
							key='home2'
							onClick={() => {
								Router.push('/articles/list')
							}}>
							{/* <Icon type="home" /> */}
							文章
						</Menu.Item>
						{/* <Menu.Item key="home3">

            关于我
          </Menu.Item> */}
					</Menu>
				</Col>
			</Row>
		</div>
	)

	if (isInDiv) {
		return <div className='header scrolled'>{commonHeader}</div>
	}

	return (
		<Affix
			style={{ ...headerStyle, zIndex: 999, width: '100%' }}
			onChange={didScrolled}>
			<div className={headerClassName}>{commonHeader}</div>
		</Affix>
	)
}

export default Header
