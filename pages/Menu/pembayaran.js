import Layout_Utama from '../../Layout/layout_utama';
import Link from  'next/link';
import React, {Component} from 'react'

class Pembayaran extends Component{
    render(){
  return(
      <Layout_Utama>
    <link rel="stylesheet" href="/css/style.css"/>
          <div>
                    <div className="judul_deskripsi">PEMBAYARAN</div>
                        <div className="div_grid">
                            <div className="menu_process">
                            <form align="justify">
                                <ul className="jarak_tr">
                                    <li>Name<span>:<span>Septiany</span></span></li>
                                    
                                    
                                </ul>
                                <ul className="jarak_tr">
                                    <li>Email<span>:<span>septiany@gmail.com</span></span>     </li>
                                                                   
                                </ul>
                                <ul className="jarak_tr">
                                    <li>Phone<span>:<span>098198765432</span></span></li>
                                    
                                    
                                </ul>
                                <ul className="jarak_tr">
                                    <li>Count<span>:<span>Rp. 2.500.000</span></span></li>
                                    
                                    
                                </ul>
                                <ul className="jarak_tr">
                                    <li>Dress Choice<span>:</span></li>
                                    
                                </ul>
                                    <div className="picture_menu_process">
                                        <div>
                                            <img src="/images/tra1.jpg"/>
                                            <div className="keterangan_menu_process">
                                                <p className="jenis_sketch_menu_process">Traditional Fashion</p><br/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="div_button">
                                      <a href="/Menu/pesanan" className="div_a_button">Confirmation Payment</a>
                                    </div>
                                </form>
                            </div>
                        </div>


                        <div className="div_grid">
                            <div className="menu_process">
                            <form align="justify">
                                <ul className="jarak_tr">
                                    <li>Name<span>:<span>Devanty Ika</span></span></li>
                                    
                                    
                                </ul>
                                <ul className="jarak_tr">
                                    <li>Email<span>:<span>devantyika@gmail.com</span></span></li>
                                    
                                    
                                </ul>
                                <ul className="jarak_tr">
                                    <li>Phone<span>:<span>098198765432</span></span></li>
                                    
                                    
                                </ul>
                                <ul className="jarak_tr">
                                    <li>Count<span>:<span>Rp. 4.500.000</span></span></li>
                                    
                                    
                                </ul>
                                <ul className="jarak_tr">
                                    <li>Dress Choice<span>:</span></li>
                                    
                                </ul>
                                    <div className="picture_menu_process">
                                        <div>
                                            <img src="/images/ballrom1.jpg"/>
                                            <div className="keterangan_menu_process">
                                                <p className="jenis_sketch_menu_process">Ballroom Dress</p><br/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="div_button">
                                        <a href="/Menu/pesanan" className="div_a_button">Confirmation Payment</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
        </Layout_Utama>
);
}
  }

  export default Pembayaran;