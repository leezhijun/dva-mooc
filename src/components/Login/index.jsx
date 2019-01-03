import React, { PureComponent } from 'react'
import { Radio, InputItem, WhiteSpace } from 'antd-mobile';
import LogoPng from '../../assets/logo.png'
import styles from './index.less'
class Login extends PureComponent {
  state = {
    username:null,
    password:null
  }

  render () {
    return (
      <div className="container">
        <div>
          <div className={styles.logo}>
            <img src={LogoPng} />
          </div>
          <div>
          <InputItem
            type="text"
            placeholder="username"
            value={this.state.username}
            onChange={(e) => this.setState({username:e})}
          >账号</InputItem>
          <InputItem
            type="password"
            placeholder="password"
            value={this.state.password}
            onChange={(e) => this.setState({password:e})}
          >密码</InputItem>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
