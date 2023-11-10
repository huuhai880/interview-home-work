import BlogPage from '@page/Blog/BlogPage'

const BlogRoutes = [
  {
    path: '/blog',
    exact: true,
    name: 'blog',
    function: 'BLOG_VIEW',
    component: BlogPage
  }
  
]

export default BlogRoutes