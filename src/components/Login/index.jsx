import React, { PureComponent } from "react";
import { InputItem, Button, WhiteSpace, WingBlank } from "antd-mobile";
import LogoPng from "../../assets/logo.png";
class Login extends PureComponent {
  state = {
    username: null,
    password: null
  };

  render() {
    return (
      <div className="container">
        <div>
          <div className='logo'>
            <img src={LogoPng} alt='logo' />
          </div>
          <div>
            <WingBlank>
              <InputItem
                type="text"
                placeholder="username"
                value={this.state.username}
                onChange={e => this.setState({ username: e })}
              >
                账号
              </InputItem>
              <InputItem
                type="password"
                placeholder="password"
                value={this.state.password}
                onChange={e => this.setState({ password: e })}
              >
                密码
              </InputItem>
              <WhiteSpace />
              <Button type="primary">登录</Button>
            </WingBlank>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
