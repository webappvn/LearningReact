import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import { routerConfig } from './routerConfig';
import MyClassBlog from './pages/MyClassBlog/MyClassBlog';
import Login from './pages/Login/Login';
import Blog from './pages/Blog/Blog';
import ForgotPass from './pages/ForgotPass/ForgotPass';

function App() {
  const routerComponent = routerConfig.map(({ path, component }, key) => {
    <Route
      path={path}
      Component={component}
      key={key}
    />;
  });
  return (
    <Routes>
      {/* {routerComponent} */}
      <Route
        // path='/classComponent/:code'
        path='/blog/:code'
        element={<Blog />}
      />
      <Route
        path='/blog'
        Component={Blog}
      />
      <Route
        path='/classComponent'
        Component={MyClassBlog}
      />
      <Route
        path='/login'
        Component={Login}
      />
      <Route
        path='/forgotPass'
        Component={ForgotPass}
      />
    </Routes>
  );
}

export default App;
