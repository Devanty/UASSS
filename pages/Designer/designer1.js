import Layout_Utama from '../../Layout/layout_utama';
import Link from 'next/link';
import data_kiri from '../../components/data_kiri.json';
import data_kanan from '../../components/data_kanan.json';

function Sketsa_Designer1(){

    return(
        <Layout_Utama>
          <div className="content">
          <link rel="stylesheet" href="/css/style.css"/>
        {data_kiri.map((data_kiri,index)=>
          <div  key={index}>
                          <div className="column_left">
                          <div className="container_left">
                              <img src="/images/ballrom1.jpg"/>
                              <div>
        <h2  className="deskripsi_left"><Link href="/Designer/deskripsi1"><a  className="deskripsi_left" >{data_kiri.sketsa1_designer_1}</a></Link></h2>
                                  <p className="p_left">{data_kiri.deskripsi_sketsa1_designer_1}</p>
                              </div>
                          </div>
                          </div></div>
                          )}
  
  
                          {data_kanan.map((data_kanan,index)=>
                          <div className="column_right" key={index}>
                          <div className="container_right">
                              <div>
                          <h2  className="deskripsi_right"><Link href="/Designer/deskripsi2"><a  className="deskripsi_right" >{data_kanan.sketsa2_designer_1}</a></Link></h2>
                                  <p className="p_right">{data_kanan.deskripsi_sketsa2_designer_1}</p>
                              </div>
                              <img src="/images/ballrom2.jpg" />
                          </div></div>)}</div>
                          </Layout_Utama>
  
  );
  }

  export default Sketsa_Designer1;