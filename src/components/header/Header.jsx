import React from 'react'
import { Row, Col } from 'antd';
import { AlignLeftOutlined } from '@ant-design/icons';
import './Header.css'
const Header = () => {
    return (
        <Row className="header">
            <Col span={1}className="mobile_bar"><AlignLeftOutlined style={{ fontSize: '30px'}} /></Col>
            <Col span={23} className="logo"></Col>
        </Row>
    )
}

export default Header
