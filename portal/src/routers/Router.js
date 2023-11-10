import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from '@src/layouts/DefaultLayout'
import Login from '../pages/Login'

function AppRouter() {
  return (
    <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
      <React.Suspense fallback={null}>
        <Routes>
          <Route
            key={new Date().getTime()}
            path='/login'
            exact={false}
            name={"login"}
            element={<Login />}
          />
        </Routes>
        <DefaultLayout />
      </React.Suspense>
    </BrowserRouter>
  )
}

export default AppRouter
