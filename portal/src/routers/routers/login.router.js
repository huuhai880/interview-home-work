import LoginPage from '../../pages/Login/index'

const AuthRoutes = [
  {
    path: '/login',
    exact: false,
    name: 'login',
    component: LoginPage
  }
  
]

export default AuthRoutes