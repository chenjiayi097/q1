import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom'
import PrivateRouter from './templates/pages/home/privateRoute';
// import Layout from "../components/layout"

const Home = lazy(() =>
    import(/* webpackChunkName: "components/login" */ '@page/home/home')
)
const Login = lazy(() =>
    import(/* webpackChunkName: "components/login" */ '@page/login/login')
)
const Register = lazy(() =>
    import(/* webpackChunkName: "components/login" */ '@page/register/register')
)

const App = () => {
  return (
    <Router>
      <Suspense fallback={<span>Loading</span>}>
        {/* Link 直接在畫面渲染類似 a標籤 的東西 */}
        <Link to="/">首頁</Link>
        <Link to="/login">登入頁</Link>
        <Link to="/register">註冊頁</Link>
        {/*<Link to="/news">最新消息</Link>*/}
        {/*<Link to="/hello-world">找不到頁面</Link>*/}

        {/* Switch 會去判斷現在的路徑來渲染你要的畫面(元件) */}
        <Switch>
          {/* Route 每個路徑對應的 component 是誰，要把它渲染出來 */}
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
