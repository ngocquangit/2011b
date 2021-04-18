import { Row, Col } from 'antd';
import { Menu, Dropdown, Button, message } from 'antd';
import { DownOutlined} from '@ant-design/icons';


const SwitchLanguage = (props)=>{
    const MenuLanguage = () => {
        return (
        <Menu onClick={handleMenuClick}>
          <Menu.Item key="vi-VN">
            Tiếng Việt
          </Menu.Item>
          <Menu.Item key="en-US">
            Tiếng Anh
          </Menu.Item>
        </Menu>
        )
    };
    function handleMenuClick(e) {
        props.change(e.key)
    }
    return (
        <>
        <Row style={{margin:'20px 0'}}>
            <Col span={20} offset={2} >
            <Dropdown overlay={<MenuLanguage/>}>
            <Button>
                Lựa chọn <DownOutlined />
            </Button>
            </Dropdown>
            </Col>
        </Row>
        </>
    )
}

export default SwitchLanguage;