import Layout from '../Layout/layout';
import React, {Component} from 'react';


class Header extends Component{
    render(){
        
  return(
      <Layout>
      <link rel="stylesheet" href="/css/style.css"/>
      <div className="login_sign_in">
      <div className="form_putih_login">
                  <div className="judul_order_sign_in_process">
                      Set Password
                  </div>
          <form align="center">
                  <ul>
                      <li>Old Password
                      <ul><input className="input_login" type="password"/></ul></li>
                  </ul>
                  <ul>
                      <li>New Password
                      <ul><input  className="input_login" type="password"/></ul></li>
                  </ul>
                  <ul>
                      <li>Re- type New Password
                      <ul><input  className="input_login" type="password"/></ul></li>
                  </ul>
                      <div className="button_login efek_linear">
                          <a href="/Beranda" >Change Password</a>
                      </div>
                      <div className="css_div2">
                          Remember password ?
                          <div>
                              <a href="/index"> Log In </a>
                          </div>
                      </div>
                      <div className="css_div2">
                          OR
                          <hr/>
                          Don't have an account?
                          <div>
                              <a href="/sign_in"> Sign In </a>
                          </div>
                      </div>
          </form>
          </div>
      </div>
        </Layout>
);
    }}

  export default Header;