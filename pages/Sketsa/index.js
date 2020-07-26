import Layout_Utama from '../../Layout/layout_utama';
import Link from 'next/link';
import data_kiri from '../../components/data_kiri.json';
import data_kanan from '../../components/data_kanan.json';
import React, {Component} from 'react';


class Sketsa extends Component{
    render(){

        return(
            <Layout_Utama>
              <div className="content">
              <link rel="stylesheet" href="/css/style.css"/>
            {data_kiri.map((data_kiri,index)=>
              <div  key={index}>
                              <div className="column_left">
                              <div className="container_left">
                                  <img src="/images/contoh_sketsa1.jpg"/>
                                  <div>
            <h2  className="deskripsi_left"><Link href="/Sketsa/sketsa1"><a  className="deskripsi_left" >{data_kiri.judul_hal_sketsa}</a></Link></h2>
                                      <p className="p_left">{data_kiri.deskripsi_hal_sketsa}</p>
                                  </div>
                              </div>
                              </div></div>
                              )}
      
      
                              {data_kanan.map((data_kanan,index)=>
                              <div className="column_right" key={index}>
                              <div className="container_right">
                                  <div>
                              <h2  className="deskripsi_right"><Link href="/Sketsa/sketsa2"><a  className="deskripsi_right" >{data_kanan.judul_hal_sketsa}</a></Link></h2>
                                      <p className="p_right">{data_kanan.deskripsi_hal_sketsa}</p>
                                  </div>
                                  <img src="/images/contoh_sketsa2.jpg" />
                              </div></div>)}</div>
                              </Layout_Utama>
      
      );

    }}
  export default Sketsa;