// ** Routes Imports

import BlogRoutes from '@router/routers/blog.route'
import AuthRoutes from './login.router'

const routes = [...AuthRoutes, ...BlogRoutes]
export default routes