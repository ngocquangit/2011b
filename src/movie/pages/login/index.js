import {useState} from 'react';
import {Row,Col,Form, Input, Button, Checkbox} from 'antd';
import { useHistory } from "react-router-dom";
import {api} from '../../servies/api';
import {helpers} from '../../helper/helper';
const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 14,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
const LoginPages =()=>{
    const [errLogin,SeterrLogin]= useState("");
    const history = useHistory();
    const onFinish = (values) => {
        // console.log('Success:', values);
        // if(values.username === 'a' && values.password === '1'){
        //     history.push("/");
        // }
        // else{
        //     alert('Sai mat khau');
        // }
        let user = values.username;
        let password = values.password;
        let token = api.checkUserLogin(user,password)
        if (token !==null) {
            console.log(token);
            SeterrLogin("");

            helpers.saveTokens(token);
            history.push("/");
        }
        else{
            SeterrLogin("Không có tài khoản");
        }
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return(
        <>
        <Row style={{paddingTop: ' 20vh'}}>
            <Col span={12} offset={6}>
                <h2 style={{textAlign: 'center', color: 'red'}}>{errLogin}</h2>
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
                </Form>
            </Col>
        </Row>
        </>
    )
}
export default LoginPages;