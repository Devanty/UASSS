import Navigation from  '../components/navigation';
import Footer from '../components/footer';
import Head from 'next/head';

const Layout_Utama = (props) => (
    <div>
        <Head>
        <title>Latihan NextJS</title>
        <meta name="viewport" content="width-device-width, initial-scale1.0" />
        </Head>

        <Navigation/>
        <link rel="stylesheet" href="/css/style.css"/>
            <section className="section">
                    {props.children}
            </section>
       <Footer/>
    </div>
)

export default Layout_Utama;