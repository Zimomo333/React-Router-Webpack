import React from 'react'
import ReactDOM from 'react-dom'

import { matchRoutes, renderRoutes } from 'react-router-config';
import { Link } from "react-router-dom";
import routes from './router'

import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import Sidebar from './components/Sidebar'
import { Breadcrumb } from 'antd';
import './App.css'

import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;

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
        const history = matchRoutes(routes, this.props.location.pathname).slice(1);
        console.log(history)
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
                            <Breadcrumb style={{ display: "inline" }}>
                                <Breadcrumb.Item><Link to="/">首页</Link></Breadcrumb.Item>
                                {
                                    history.map( (item,index) => 
                                            <Breadcrumb.Item key={index} >
                                                <Link to={item.route.path}>{item.route.title}</Link>
                                            </Breadcrumb.Item>
                                    )
                                }
                            </Breadcrumb>
                        </Header>
                        <Content
                            className="site-layout-background"
                            style={{
                                margin: '24px 16px',
                                padding: 24,
                                minHeight: 700
                            }}
                        >
                            { renderRoutes(this.props.route.routes) }
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}