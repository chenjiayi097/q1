import React,{ useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import './login.css';
import Toast from '../../../common/components/toast/toast'
import ReactDOM from "react-dom";


const App = () => {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        console.log(username, password, 'You clicked submit.');

        await axios.post(`https://l8-upgrade-apis.vercel.app/api/login`, {username, password,})
          .then(({ data }) => {
            console.log('testtesttest', Toast.error)
            console.log('data.success', data.success)
            if (data.success) {
              localStorage.setItem('userToken', data.token)

              .console.log(data.message)
            } else {
              console.log(data.message)
            }
          })
          .catch((err) => {
            // err.response 可以反撈返回值
            console.log('err.response.status', err.response.status)
            console.log('testtesttest', Toast.error)
            localStorage.removeItem('userToken')
          })

        //   console.log(result.status, 999999999999)
        // if(result.status === 200) {
        //     localStorage.setItem('AUTHENTICATION_TOKEN', result.data.token);
        //     history.push('/');
        //     // history.push({
        //     //     pathname: "/home",
        //     // });
        // } else {
        //   console.log('登入失敗')
        // }
    }

  return (
    <div className="App">
      <div className="login-wrap">
        <form onSubmit={handleSubmit}>
          <h1>登入</h1>
          <label>
            帳號:
            <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} value={username} />
          </label>
          <label>
            密碼:
            <input type="text" name="password" onChange={(e) => setPassword(e.target.value)} value={password} />
          </label>
          <Link to="/register">註冊</Link>
          <button type="submit">登入</button>
        </form>
      </div>
    </div>
  );
}

export default App;
