import Layout_Utama from '../../Layout/layout_utama';
import Link from  'next/link'
import data_kanan from '../../components/data_kanan.json';
import React, {Component} from 'react';


class Des_Sketsa extends Component{
    render(){
        return(
          <Layout_Utama>
        <link rel="stylesheet" href="/css/style.css"/>
              {data_kanan.map((data_kanan,index)=>
        <div key={index}>
        <div className="judul_deskripsi">DESKRIPSI</div>
                        <div className="deskripsi_produk">
                            <form>
                                <div>
                                    <div className="container_div">
                                        <img src="/images/tra2.jpg"/>
                                        <div>
              <h2>{data_kanan.tradisional_2}</h2>
              <p>{data_kanan.keterangan_tradisional_2}</p>
                                        </div>
                                            <div>
              <h5><b>{data_kanan.harga_tradisional_2}</b></h5>
                                                <h4>Desaigner Sketch</h4>
              <h6>{data_kanan.designer_tradisional_2}</h6>
                                            </div>
                                    </div>
                                </div>
                                <br/><br/>
                                <Link href="/form/code"><a className="button_checkout a_checkout">Order Now</a></Link>
                                <div>
                                <Link href="/Sketsa/sketsa1"><a className="a_cancel">Cancel</a></Link></div>
                            </form>
                        </div>
                    </div>
                    )}
            </Layout_Utama>
      );
}
  }
  export default Des_Sketsa;
