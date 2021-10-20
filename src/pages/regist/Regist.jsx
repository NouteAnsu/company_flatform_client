import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { Row, Col, Input, Select, Modal } from 'antd';
import './Regist.css'
import { ArrowLeftOutlined } from '@ant-design/icons'
const Regist = () => {
    const { Option } = Select;
    const history = useHistory()
    const move_login = () => {
        history.push('/')
    }
    const [values, setValues] = useState({ username: "", password: "", passwordConfirm: "", name: "", nickname: "", phone: "", dept: "", secret: "" })

    //하나의 핸들러로 값을 onChange
    const handleChange = e => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value });//values의 배열에 값을 넣음, 넘어오는 name: value 값으로
    }
    const changeOption = e => {
        values.dept = e
    }
    const sucucess = () => {
        Modal.success({
            content: '가입이 완료되었습니다.',
            okText:'확인',
            onOk() {
                move_login()
            }
        })
        
    }
    const fail = (content) => {
        Modal.warning({
            title: '가입에 실패하였습니다.',
            content: content,
            okText:'확인'
        })
    }
    const regist_submit = () => {
        sucucess()
    }
    const regist_validation = () => {
        var info = values
        var regUsername = /^[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
        var regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
        if (info.username === "") {
            fail('이메일을 입력해주세요')
            return false
        } else {
            if (regUsername.test(info.username) !== true) {
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
        if (info.phone !== "") {
            if (regPhone.test(info.phone) !== true) {
                fail("휴대폰 번호 형식에 올바르지 않습니다")
                return false
            }
        }

        if(info.secret ===""){
            fail("보안코드를 입력해주세요")
            return false
        } else {
            if(info.secret !=="noute"){
                fail("보안코드가 올바르지 않습니다.")
                return false
            }
        }
        regist_submit()
    }


    return (
        <div className="regist_wrap">
            <ArrowLeftOutlined className="back_icon" style={{ fontSize: "20px" }} onClick={move_login} />
            <div >
                <Col span={24} className="regist_form">
                    <Row justify="center">
                        <Col span={20}>
                            <Col style={{ marginBottom: "8px" }}>
                                <Col>이메일</Col>
                                <Input name="username" size="large" placeholder="이메일을 입력해주세요" onChange={handleChange} />
                            </Col>
                            <Col style={{ marginBottom: "8px" }}>
                                <Col>비밀번호</Col>
                                <Input.Password name="password" size="large" placeholder="비밀번호를 입력해주세요" style={{ marginBottom: "5px" }} onChange={handleChange} />
                                <Input.Password name="passwordConfirm" size="large" placeholder="비밀번호를 확인해주세요" onChange={handleChange} />
                            </Col>
                            <Col style={{ marginBottom: "8px" }}>
                                <Col>이름</Col>
                                <Input name="name" size="large" placeholder="이름을 입력해주세요" onChange={handleChange} />
                            </Col>
                            <Col style={{ marginBottom: "8px" }}>
                                <Col>닉네임</Col>
                                <Input name="nickname" size="large" placeholder="닉네임을 입력해주세요" onChange={handleChange} />
                            </Col>
                            <Col style={{ marginBottom: "8px" }}>
                                <Col>연락처</Col>
                                <Input name="phone" size="large" placeholder="휴대폰 번호를 입력해주세요" onChange={handleChange} />
                            </Col>
                            <Col style={{ marginBottom: "8px" }}>
                                <Col>부서</Col>
                                <Select name="dept" size="large" style={{ width: "100%" }} onChange={changeOption}>
                                    <Option value="그로스팀">그로스팀</Option>
                                    <Option value="디자인팀">디자인팀</Option>
                                    <Option value="재무팀">재무팀</Option>
                                    <Option value="개발팀">개발팀</Option>
                                    <Option value="운영팀">운영팀</Option>
                                </Select>
                            </Col>
                            <Col>
                                <Col>보안코드</Col>
                                <Input name="secret" size="large" placeholder="보안코드를 입력해주세요" onChange={handleChange} />
                            </Col>
                        </Col>
                    </Row>
                    <Col className="regist_btn" onClick={regist_validation}>가입 완료</Col>
                </Col>
            </div>
        </div>
    )
}

export default Regist
