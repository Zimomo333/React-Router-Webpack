import React from 'react'
import ReactDOM from 'react-dom'

import { renderRoutes } from 'react-router-config';
import routes from './router'

import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import Sidebar from './components/Sidebar'
import './App.css'

import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

export default class App extends React.Component {
    state = {
        collapsed: false
    };
    
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    render() {
        return (
            <div>
                <Layout>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className="logo" >React-Router-Webpack</div>
                        <Sidebar />
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{ padding: 0 }}>
                            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: this.toggle,
                            })}
                        </Header>
                        <Content
                            className="site-layout-background"
                            style={{
                                margin: '24px 16px',
                                padding: 24,
                                minHeight: 700
                            }}
                        >
                            { renderRoutes(routes) }
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}