import { useState } from 'react'
import './Login.css'

function Login({ onLogin }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onLogin(password)) {
      setError('')
    } else {
      setError('密码错误，请重试')
      setPassword('')
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>周氏家族谱</h1>
        <p className="login-subtitle">请输入访问密码</p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="请输入密码"
            className="login-input"
            autoFocus
          />
          {error && <div className="login-error">{error}</div>}
          <button type="submit" className="login-button">
            登录
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
