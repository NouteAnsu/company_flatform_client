import { Col,Row,Input,Form,Image} from 'antd';
import React, {useState} from 'react'
import { useHistory } from 'react-router';
import './Login.css';

const Login = () => {
    const history = useHistory()
    const registPage = () => {
        history.push("/regist")
    }
    const searchPage = () => {
        history.push("/search/id")
    }
    const [values, setValues] = useState({username:"",password:""})

    //하나의 핸들러로 값을 onChange
    const handleChange = e => {
        const {name , value} = e.target
        setValues({...values,[name]: value});
    }
    const login_submit = () => {
        console.log(values.username)
        console.log(values.password)
    }
    const onCheckEnter = e => {
        if(e.key === 'Enter') {
            login_submit()
        }
    }
    return (
        <div className="login_wrap">
            <Col span={20}>
                <Col style={{marginBottom:"15px"}}>
                    <Image src="images/logo.png" preview={false}></Image>
                </Col>
                <Col style={{marginBottom:"5px"}}>
                    <Form onKeyPress={onCheckEnter}>
                        <Input name="username" value={values.username} size="large" placeholder="이메일을 입력해주세요" onChange={handleChange} style={{marginBottom:"5px"}}/>
                        <Input.Password name="password" value={values.password} size="large" placeholder="비밀번호를 입력해주세요" onChange={handleChange} />
                    </Form>
                </Col>
                <Row justify="space-between" style={{marginBottom:"40px"}}>
                    <Col style={{textDecoration:"underline",cursor:"pointer"}} onClick={searchPage}>아이디/비밀번호 찾기</Col>
                    <Col style={{textDecoration:"underline",cursor:"pointer"}} onClick={registPage}>회원가입</Col>
                </Row>
                <Col className="login_btn" onClick={login_submit}>로그인</Col>

            </Col>
        </div>
    )
}

export default Login
