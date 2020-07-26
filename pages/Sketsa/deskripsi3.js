import Layout_Utama from '../../Layout/layout_utama';
import Link from  'next/link'
import data_kiri from '../../components/data_kiri.json';
import React, {Component} from 'react';


class Des_Sketsa extends Component{
    render(){

        return(
            <Layout_Utama>
          <link rel="stylesheet" href="/css/style.css"/>
                {data_kiri.map((data_kiri,index)=>
          <div key={index}>
          <div className="judul_deskripsi">DESKRIPSI</div>
                          <div className="deskripsi_produk">
                              <form>
                                  <div>
                                      <div className="container_div">
                                          <img src="/images/m1.jpg"/>
                                          <div>
                <h2>{data_kiri.modern_1}</h2>
                <p>{data_kiri.keterangan_modern_1}</p>
                                          </div>
                                              <div>
                <h5><b>{data_kiri.harga_modern_1}</b></h5>
                                                  <h4>Desaigner Sketch</h4>
                <h6>{data_kiri.designer_modern_1}</h6>
                                              </div>
                                      </div>
                                  </div>
                                  <br/><br/>
                                  <Link href="/form/code"><a className="button_checkout a_checkout">Order Now</a></Link>
                                  <div>
                                  <Link href="/Sketsa/sketsa2"><a className="a_cancel">Cancel</a></Link></div>
                              </form>
                          </div>
                      </div>
                      )}
              </Layout_Utama>
      );

    }}
  export default Des_Sketsa;