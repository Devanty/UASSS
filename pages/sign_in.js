import Layout from '../Layout/layout';
import React, {Component} from 'react';


class Header extends Component{
    render(){

        return(
            <Layout>
            <div className="login_sign_in">
            <div className="form_putih_login">
                        <div className="judul_order_sign_in_process">
                            Sign In
                        </div>
                <form align="center">
                        <ul>
                            <li>Username <span>:<span><input className="input_sign_in" type="text" placeholder="Username"/></span></span></li>
                           
                            
                        </ul>
                        <ul>
                            <li>E - Mail <span>:<span><input className="input_sign_in" type="email" placeholder="Email"/></span></span></li>
                           
                            
                        </ul>
                        <ul>
                            <li>Password <span>:<span><input className="input_sign_in" type="password" placeholder="Password"/></span></span></li>
                           
                            
                        </ul>
      
                            <div className="button_sign_in efek_linear">
                                <a href="/Beranda" >Create Account</a>
                            </div>
                            <hr/>
                            <div className="css_div2">
                                Have an account?
                                <div>
                                    <a href="/index"> Log In </a>
                                </div>
                            </div>
                </form>
                </div>
            </div>
              </Layout>
      );
    }}


  export default Header;