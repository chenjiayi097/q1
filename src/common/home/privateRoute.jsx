import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import axios from "axios";
import './home.css';

//配置私有路由，阻攔未登入的使用者
const privateRouter = ({ component: Component, ...rest }) => {
    const token = localStorage.getItem('AUTHENTICATION_TOKEN')
    const result = axios
        .get('/api/authentication', {
            headers: {
                AUTHENTICATION_TOKEN: token,
            },
        })
        .then((res) => {

            console.log(res, 6666)
            return res;
        })
        .catch((err) => {
            return err.response;
        });
    console.log(result)

    let isLogin = localStorage.getItem('userId')
    return (
        <Route
            {...rest}
            render={routeProps => (
                isLogin?
                    <Component {...routeProps} />: <Redirect to="/" />
            )}
        />
    );
}

export default privateRouter;
