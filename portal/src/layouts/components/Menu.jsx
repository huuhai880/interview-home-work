import React from 'react'
import { Link } from 'react-router-dom'
import { DesktopOutlined, PieChartOutlined } from '@ant-design/icons'
import {ConfigProvider, Layout, Menu } from 'antd'
const { Sider } = Layout

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label
    }
}
const items = [
    getItem('Option 1', '1', <Link to='/'><PieChartOutlined /></Link>),
    getItem('Option 2', '2', <Link to={'/v1'}><DesktopOutlined /></Link>)
]

function MenuLayout({ collapsed = false, action = () => { } }) {

    return (
        <React.Fragment>
            <ConfigProvider
                theme={{
                    token: {colorPrimary: '#1677ff'}
                }}
            >
                <Sider collapsible={false} collapsed={collapsed} onCollapse={(value) => action(value)} width={collapsed ? 80 : 240} theme='dark'>

                    <div className='w-full h-[70px] mb-3 bg-rose-600'>

                    </div>

                    <div style={{ width: "100%", height: 70, backgroundColor: 'gray', marginBottom: 8 }}>

                    </div>

                    <Menu defaultSelectedKeys={['1']} mode="inline" items={items} theme='dark' />

                </Sider>

            </ConfigProvider>

        </React.Fragment>
    )
}

export default MenuLayout
