import Layout_Utama from '../../Layout/layout_utama';
import data_kiri from '../../components/data_kiri.json';
import data_kanan from '../../components/data_kanan.json';
import Link from 'next/link';
import React, {Component} from 'react';


class Beranda extends Component{
    render(){
      return(
          <Layout_Utama>
            <div className="content">
            <link rel="stylesheet" href="/css/style.css"/>
                              <h2 className=" p_welcome p_welcome_h2">Welcome To Fialovi Fashion</h2><br/>
                              <h3 className=" p_welcome p_welcome_h3">Find your own style here....</h3><br/>
                              <h3 className=" p_welcome p_welcome_h3">We provide several sketches of clothes that you can choose</h3> 
          {data_kiri.map((data_kiri,index)=>
            <div  key={index}>
                            <div className="column_left">
                            <div className="container_left">
                                <img src="/images/sket1.jpeg"/>
                                <div>
          <h2  className="deskripsi_left"><Link href="/Sketsa">
            <a  className="deskripsi_left" >{data_kiri.judul_beranda}</a></Link></h2>
                                    <p className="p_left">{data_kiri.deskripsi_beranda}</p>
                                </div>
                            </div>
                            </div></div>
                            )}
    
    
                            {data_kanan.map((data_kanan,index)=>
                            <div className="column_right" key={index}>
                            <div className="container_right">
                                <div>
                            <h2  className="deskripsi_right"><Link href="/Designer">
                              <a  className="deskripsi_right">{data_kanan.judul_beranda}</a></Link></h2>
                                    <p className="p_right">{data_kanan.deskripsi_beranda}</p>
                                </div>
                                <img src="/images/Designer.jpeg" />
                            </div></div>)}</div>
                            </Layout_Utama>
    
    );}

    }

  export default Beranda;