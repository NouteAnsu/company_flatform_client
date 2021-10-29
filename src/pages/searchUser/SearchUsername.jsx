import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { Row, Col} from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons'
import './SearchUsername.css'

const SearchUsername = () => {
    const history = useHistory()
    const move_login = () => {
        history.push('/')
    }
    const move_pwd = () => {
        history.push('/search/pwd')
    }
    return (
        <div className="search_user_wrap">
            <Col>
                <Row justify="center" align="middle" style={{margin:"20px"}}>
                    <Col span={12}>
                        <ArrowLeftOutlined style={{ fontSize: "20px" }} onClick={move_login} />
                    </Col>
                    <Col span={12} style={{textAlign:"right"}}>
                        <span className="search_pwd" onClick={{move_pwd}}>비밀번호 찾기</span>
                    </Col>
                </Row>
                <Col>
                    
                </Col>
            </Col>
        </div>
    )
}

export default SearchUsername
