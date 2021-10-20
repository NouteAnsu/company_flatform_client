import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { Row, Col, Input, Modal, DatePicker } from 'antd';
import './Regist.css'
import { ArrowLeftOutlined } from '@ant-design/icons'
const Regist = () => {
    const history = useHistory()
    const move_login = () => {
        history.push('/')
    }
    const [values, setValues] = useState({ username: "", password: "", passwordConfirm: "", name: "", join_date: "", secret: "" })

    //하나의 핸들러로 값을 onChange
    const handleChange = e => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value });//values의 배열에 값을 넣음, 넘어오는 name: value 값으로
    }
    const dateChange = e => {
        var join_date = new Date(e._d).toISOString()
        values.join_date = join_date.substr(0, 10)
    }
    const sucucess = () => {
        Modal.success({
            content: '가입이 완료되었습니다.',
            okText: '확인',
            onOk() {
                move_login()
            }
        })

    }
    const fail = (content) => {
        Modal.warning({
            title: '가입에 실패하였습니다.',
            content: content,
            okText: '확인'
        })
    }
    const regist_submit = () => {
        sucucess()
    }
    const regist_validation = () => {
        var info = values
        var regUsername = /^[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
        if (info.username === "") {
            fail('이메일을 입력해주세요')
            return false
        } else {
            if (!regUsername.test(info.username)) {
                fail('이메일 형식에 올바르지 않습니다')
                return false
            }
        }
        if (info.password === "" || info.passwordConfirm === "") {
            fail("비밀번호를 입력해주세요")
            return false
        } else {
            if (info.password !== info.passwordConfirm) {
                fail('비밀번호가 일치 하지 않습니다')
                return false
            }
        }
        if (info.name === "") {
            fail('이름을 입력해주세요')
            return false
        }
        if (info.join_date === "") {
            fail("입사일을 입력해주세요")
            return false
        }

        if (info.secret === "") {
            fail("보안코드를 입력해주세요")
            return false
        } else {
            if (info.secret !== "noute") {
                fail("보안코드가 올바르지 않습니다.")
                return false
            }
        }
        regist_submit()
    }


    return (
        <div className="regist_wrap">
            <ArrowLeftOutlined className="back_icon" style={{ fontSize: "20px" }} onClick={move_login} />
            <Col span={24} className="regist_form">
                <Row justify="center" align="middle">
                    <Col span={20}>
                        <Col style={{ marginBottom: "15px" }}>
                            <Col>이메일</Col>
                            <Input name="username" size="large" placeholder="이메일을 입력해주세요" onChange={handleChange} />
                        </Col>
                        <Col style={{ marginBottom: "15px" }}>
                            <Col>비밀번호</Col>
                            <Input.Password name="password" size="large" placeholder="비밀번호를 입력해주세요" style={{ marginBottom: "5px" }} onChange={handleChange} />
                            <Input.Password name="passwordConfirm" size="large" placeholder="비밀번호를 확인해주세요" onChange={handleChange} />
                        </Col>
                        <Col style={{ marginBottom: "15px" }}>
                            <Col>이름</Col>
                            <Input name="name" size="large" placeholder="이름을 입력해주세요" onChange={handleChange} />
                        </Col>
                        <Col style={{ marginBottom: "15px" }}>
                            <Col>입사일</Col>
                            <DatePicker placeholder="입사일을 입력해주세요" size="large" style={{ width: "100%" }} onChange={dateChange} />
                        </Col>
                        <Col style={{ marginBottom: "40px" }}>
                            <Col>보안코드</Col>
                            <Input name="secret" size="large" placeholder="보안코드를 입력해주세요" onChange={handleChange} />
                        </Col>
                        <Col className="regist_btn" onClick={regist_validation}>가입 완료</Col>
                    </Col>
                </Row>
            </Col>
        </div>
    )
}

export default Regist
