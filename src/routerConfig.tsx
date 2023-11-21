import Layout from "./components/Layout";
import Blog from "./pages/Blog/Blog";
import PostBlog from "./pages/Blog/PostBlog/PostBlog";
import ForgotPass from "./pages/ForgotPass/ForgotPass";
import Login from "./pages/Login/Login";
import MyClassBlog from "./pages/MyClassBlog/MyClassBlog";
import register from "./pages/Register/Register";

export const routesPath = {
  HOME: "/",
  blog: "/blog",
  danh_muc: "/blog/:code",
  classComponent: "/classComponent",
  login: "/login",
  forgotPass: "/forgotPass",
  register: "/register",
  blog_detail: "/blog/bai-viet/:code",
};

export const routerConfig = [
  { path: routesPath.blog, component: Blog, layout: Layout },
  { path: routesPath.danh_muc, component: Blog, layout: Layout },
  { path: routesPath.blog_detail, component: PostBlog, layout: Layout },
  { path: routesPath.classComponent, component: MyClassBlog },
  { path: routesPath.login, component: Login },
  { path: routesPath.forgotPass, component: ForgotPass },
  { path: routesPath.register, component: register },
];
