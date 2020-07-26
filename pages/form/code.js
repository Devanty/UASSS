import Layout_Utama from '../../Layout/layout_utama';
import Link from 'next/link';
import React, {Component} from 'react';


class Code extends Component{
    render(){
    return(
        <Layout_Utama>
        <div className="form_order_process">
        <div className="form_putih">
                    <div className="judul_order_sign_in_process">
                        Kode Pembayaran
                    </div>
            <form className="form_putih" align="center">
                    <ul>
                        <li>Tunjukkan Kode Pembayaran !!!</li>
                    </ul>
                    <ul>
                        <li>Your Code For Payment:</li>
                    </ul>
                    <ul>
                        <b>SPTI0999HZX6WC5EDW6DD</b>
                    </ul>
                    <ul>
                        Pilih salah satu metode pembayaran :
                    </ul>
                    <ul>
                        <li>Bank</li>
                        <li>Indomaret</li>
                        <li>Alfamart</li>
                        <li>Transfer ATM</li>
                        </ul>
                    <ul>
                        <li>Jangka Waktu Pembayaran <b> 2 X 24 Jam</b></li>
                    </ul>
                    </form>
                        <div className="div_button_proses_payment">
                            <Link href="/Menu/pembayaran"><a className="a_button_proses_payment">OK</a></Link>
                        </div>
                    </div>
            </div>

                          </Layout_Utama>
  
  );

    }}
  export default Code;