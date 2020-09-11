import React from 'react'
import ReactDOM from 'react-dom'
import { Menu, Button } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, ProfileOutlined, UserOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

class Sider extends React.Component {
    state = {
        collapsed: false,
    };
    
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <div style={{ width: 256 }}>
                <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                    {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                </Button>
                <Menu
                    onClick={this.handleClick}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    inlineCollapsed={this.state.collapsed}
                >
                    <Menu.Item key="1" icon={<UserOutlined />}>个人中心</Menu.Item>
                    <SubMenu key="sub1" icon={<ProfileOutlined />} title="订单管理">
                    <Menu.Item key="5">我的订单</Menu.Item>
                    <Menu.Item key="6">提交订单</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

export default Sider