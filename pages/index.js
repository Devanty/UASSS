import Layout from '../Layout/layout';
import Link from 'next/link';
import React, {Component} from 'react';


class Header extends Component{
    render(){
  return(
      <Layout>
    <div>
    <link rel="stylesheet" href="/css/style.css"/>
                    <div className="login_sign_in">
                    <div className="form_putih_login">
                                <div className="judul_order_sign_in_process">
                                    Log In
                                </div>
                        <form align="center">
                                <ul>
                                    <li>Email
                                    <ul><input className="input_login" type="email" /></ul></li>
                                </ul>
                                <ul>
                                    <li>Password
                                    <ul><input  className="input_login" type="password"/></ul></li>
                                </ul>
                                    <div className="button_login efek_linear">
                                    <Link href="/Beranda"><a >LOG - IN</a></Link>
                                    </div>
                                    <div className="forgot_password">
                                        <a href="/forgot_pass">Forgot Your Password ?</a><br/>
                                    </div>
                                    <div className="css_div2">
                                        OR
                                        <hr/>
                                        Don't have an account?
                                        <div>
                                            <a href="/sign_in"> Sign In Now </a>
                                        </div>
                                    </div>
                        </form>
                        </div>
                    </div>
    </div>
        </Layout>
);

    }}


  export default Header;