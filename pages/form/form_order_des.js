import Layout_Utama from '../../Layout/layout_utama';
import Link from 'next/link';

function Form(){

    return(
        <Layout_Utama>
        <div className="form_order_process">
        <div className="form_putih">
                    <div className="judul_order_sign_in_process">
                        Order Process
                    </div>
            <form className="form_putih">
            <table align="center">
                    <tr>
                        <td>Name</td>
                        <td>:</td>
                        <td><input type="text" placeholder="Name" value="Devanty Ika"/></td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>:</td>
                        <td><input type="text" placeholder="Email" value="devantyika@gmail.com"/></td>
                    </tr>
                    <tr>
                        <td>Phone Number</td>
                        <td>:</td>
                        <td><input type="text" placeholder="Phone Number" value="098198765432"/></td>
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
                                    <p className="jenis_sketch">Ballrom Gown</p><br/>
                                    <p className="nama_desaigner">Riska Aulia</p>
                                </div>
                            </div>
                        </div>
                        <div className="div_button_proses_cancel">
                            <a href="/form/form_payment_des" clasName="a_button_proses_form_order">Process</a>
                        </div>
                        <div className="div_button_proses_cancel">
                            <a href="/Beranda" className="a_button_cancel">Cancel!</a>
                        </div>
            </form>
            </div>
        </div>
                          </Layout_Utama>
  
  );
  }

  export default Form;