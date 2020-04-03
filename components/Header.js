import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'

import { Row, Col, Menu, Icon, Affix } from 'antd'
import '@css/components/header.less'

const Header = props => {

	// 判断是否已经滑动，默认是没有滑动的状态
	const [isScrolled, setScrolled] = useState(false)
	// isFixed 判断是否固定在头部显示，
	// isInDiv 判断是否在 div 内部显示
	const { title, description, keywords, isFixed, isInDiv } = props

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
			top: 10,
			left: 0
		}
		headerClassName = isScrolled ? 'header scrolled' : 'header'
	}

	const commonHeader = (
		<div className='header-content'>
			<Row type='flex' justify='space-between' align='middle'>
				<Col>
					<div
						className="header-title"
						onClick={() => {
							Router.push('/')
						}}
					>
						Silence
					</div>
				</Col>
				<Col>
					<Row type='flex' justify='end' align='middle'>
						<Col>
							<div className="menu-item" onClick={() => { }}>
								首页
							</div>
						</Col>
						<Col
							onClick={() => {
								Router.push('/articles/list')
							}}>
							<div className="menu-item" onClick={() => { }}>
								文章
							</div>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	)

	if (isInDiv) {
		return (
			<div>
				<Head>
					<title>{title}</title>
					<meta name="description" content={description}></meta>
					<meta name="keywords" content={keywords}></meta>
					<meta name="viewport" content="initial-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=0;" key="viewport" />
				</Head>
				<div className='header scrolled'>{commonHeader}</div>
			</div>
		)
	}

	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description}></meta>
				<meta name="keywords" content={keywords}></meta>
				<meta name="viewport" content="initial-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=0;" key="viewport" />
			</Head>
			<Affix
				style={{ ...headerStyle, zIndex: 999, width: '100%' }}
				onChange={didScrolled}>
				<div className={headerClassName}>{commonHeader}</div>
			</Affix>
		</div>
	)
}

export default Header
