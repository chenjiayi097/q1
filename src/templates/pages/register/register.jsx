import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import './register.css';

function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();


        console.log(username, password, 'You clicked submit.');

        const result = await axios.post(`https://l8-upgrade-apis.vercel.app/api/register`, {username, password})
            .then((res) => {
                console.log('123123',res)
                return res
            })
            .catch(res => {
                console.log(res)
                return res
            });
        console.log('123456456', result.status)
    }

  return (
    <div className="App">
      <div className="register-wrap">
          <form onSubmit={handleSubmit}>
              <h1>註冊頁面</h1>
              <label>
                  帳號:
                  <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} value={username} />
              </label>
              <label>
                  密碼:
                  <input type="text" name="password" onChange={(e) => setPassword(e.target.value)} value={password} />
              </label>
              <label>
                  確認密碼:
                  <input type="text" name="confirmpassword" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmpassword} />
              </label>
              <Link to="/login">返回登入</Link>
              <button type="submit">註冊</button>
          </form>
      </div>
    </div>
  );
}

export default App;
