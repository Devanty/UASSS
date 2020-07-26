import Layout_Utama from '../../Layout/layout_utama';
import Link from 'next/link';
import data_kiri from '../../components/data_kiri.json';
import data_kanan from '../../components/data_kanan.json';
import React, {Component} from 'react';


class Designer extends Component{
    render(){
        return(
            <Layout_Utama>
              <div className="content">
              <link rel="stylesheet" href="/css/style.css"/>
            {data_kiri.map((data_kiri,index)=>
              <div  key={index}>
                              <div className="column_left">
                              <div className="container_left">
                                  <img src="/images/riska.jpg"/>
                                  <div>
            <h2  className="deskripsi_left"><Link href="/Designer/designer1"><a  className="deskripsi_left" >{data_kiri.judul_hal_designer}</a></Link></h2>
                                      <p className="p_left">{data_kiri.deskripsi_hal_designer}</p>
                                  </div>
                              </div>
                              </div></div>
                              )}
      
      
                              {data_kanan.map((data_kanan,index)=>
                              <div className="column_right" key={index}>
                              <div className="container_right">
                                  <div>
                              <h2  className="deskripsi_right"><Link href="/Designer/designer2"><a  className="deskripsi_right" >{data_kanan.judul_hal_designer}</a></Link></h2>
                                      <p className="p_right">{data_kanan.deskripsi_hal_designer}</p>
                                  </div>
                                  <img src="/images/septi.jpg" />
                              </div></div>)}</div>
                              </Layout_Utama>
      
      );

    }}

export default Designer;