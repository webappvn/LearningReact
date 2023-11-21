import Blog from './pages/Blog/Blog';
import ContentPage from './pages/Blog/ContentPage/ContentPage';
import ForgotPass from './pages/ForgotPass/ForgotPass';
import Login from './pages/Login/Login';
import MyClassBlog from './pages/MyClassBlog/MyClassBlog';
import register from './pages/Register/Register';

export const routesPath = {
  HOME: '/',
  blog: '/blog',
  contentPage: '/blog/:code',
  classComponent: '/classComponent',
  login: '/login',
  forgotPass: '/forgotPass',
  register: '/register',
};
export const routerConfig = [
  { path: routesPath.blog, component: Blog },
  { path: routesPath.contentPage, component: ContentPage },
  { path: routesPath.classComponent, component: MyClassBlog },
  { path: routesPath.login, component: Login },
  { path: routesPath.forgotPass, component: ForgotPass },
  { path: routesPath.register, component: register },
];
