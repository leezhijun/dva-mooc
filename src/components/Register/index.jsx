import React, { PureComponent } from "react";
import { InputItem, Button, WhiteSpace, WingBlank, Radio, List } from "antd-mobile";
import LogoPng from "../../assets/logo.png";

const RadioItem = Radio.RadioItem;
class Register extends PureComponent {
  state = {
    username: null,
    password: null,
    dbpassword:null,
    value:0
  };
  onChange = (value) => {
    console.log('checkbox');
    this.setState({
      value,
    });
  };
  render() {
    const { value } = this.state;
    const data = [
      { value: 0, label: '牛人' },
      { value: 1, label: 'boss' },
    ];
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
              <InputItem
                type="password"
                placeholder="password"
                value={this.state.dbpassword}
                onChange={e => this.setState({ dbpassword: e })}
              >
                重复密码
              </InputItem>
              <List renderHeader={() => '选择注册类型'}>
                {data.map(i => (
                  <RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
                    {i.label}
                  </RadioItem>
                ))}
              </List>
              <WhiteSpace />
              <Button type="primary">注册</Button>
            </WingBlank>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
