import Blog from './pages/Blog/Blog';
import ContentPage from './pages/Blog/ContentPage/ContentPage';
import MyClassBlog from './pages/MyClassBlog/MyClassBlog';

export const routesPath = {
  HOME: '/',
  blog: '/blog',
  contentPage: '/blog/:code',
  classComponent: '/classComponent',
};
export const routerConfig = [
  { path: routesPath.blog, component: Blog },
  { path: routesPath.contentPage, component: ContentPage },
  { path: routesPath.classComponent, component: MyClassBlog },
];
