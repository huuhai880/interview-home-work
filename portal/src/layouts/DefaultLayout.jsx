import React, { Suspense, useEffect, useMemo } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import routes from '@router/routers'
import { Layout } from 'antd'
import HeaderLayout from './components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../redux/actions'
import { COOKIE_JWT } from '../utils/constants'
import { getCookie } from '../utils/cookie'

const { Content, Footer } = Layout

function DefaultLayout() {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state?.reducer)

  useEffect(() => {
    if (getCookie(COOKIE_JWT)) {
      dispatch(getProfile())
    }
  }, [])

  const jsx_render = useMemo(() => {
    return (
      <Suspense fallback={null}>
        <Routes>
          {routes.map((route) => {

            return (
              route.component && (
                <Route
                  key={new Date().getTime()}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.component />}
                />
              )
            )
          })}

        </Routes>
      </Suspense>
    )
  }, [routes])

  if (!user) {
    return <Navigate to='/login' />
  }
  return (
    <React.Fragment>
      <Layout style={{ minHeight: '100vh' }}>
        <Layout>
          <HeaderLayout />
          <Content>
            <div className='mt-[100px] flex justify-center'>
              {jsx_render}
            </div>
          </Content>
          <Footer
            style={{
              textAlign: 'center'
            }}
          >
            Design ©2023 Created by hainh
          </Footer>
        </Layout>
      </Layout>
    </React.Fragment>
  )
}

export default DefaultLayout
