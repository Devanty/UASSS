import Layout_Utama from '../../Layout/layout_utama';
import Link from 'next/link';
import data_kiri from '../../components/data_kiri.json';

function Sketsa(){

    return(
        <Layout_Utama>
        <div className="form_order_process">
        <div className="form_putih">
                    <div className="judul_order_sign_in_process">
                        Payment Process
                    </div>
            <form className="form_putih">
            <table align="center">
                    <tr>
                        <td>Count</td>
                        <td>:</td>
                        <label>Rp. 4.500.000;</label>
                    </tr>
                    <tr>
                        <td>Dress Choice</td>
                        <td>:</td>
                        </tr>
                    </table>
                        <div className="dress_choice">
                            <div>
                                <img src="/images/ballrom1.jpg"/>
                                <div className="keterangan_order">
                                    <p className="jenis_sketch">Ballroom Dress</p><br/>
                                </div>
                            </div>
                        </div>
                        <div className="div_button_proses_cancel">
                            <a href="/form/code" className="a_button_proses_payment">Pay Now</a>
                        </div>
            </form>
            </div>
        </div>
                          </Layout_Utama>
  
  );
  }

  export default Sketsa;