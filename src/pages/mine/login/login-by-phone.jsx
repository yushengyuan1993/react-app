import React, { Component } from 'react';

class LoginByPhone extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() { 
    return (
      <div className="login-by-phone">
        <div className="title">验证码登录</div>
        <div className="warn">请输入正确的手机号</div>
        <div className="form">
          <div className="item phone">
            <input type="tel" maxLength="11" placeholder="请输入手机号" />
            <div className="btn clear"></div>
          </div>
          <div className="item captcha">
            <input type="tel" maxLength="4" placeholder="输入4位验证码" />
            <div className="btn get_captcha">获取验证码</div>
          </div>
        </div>
        <div className="operation">
          <div className="switch register">新人注册</div>
          <div className="switch by-password">账号登录</div>
        </div>
        <div className="footer">
          <div className="btn" data-status="on">登录</div>
        </div>
      </div>
    );
  }
}
 
export default LoginByPhone;