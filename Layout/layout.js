import Header from '../components/header';
import Footer from '../components/footer';
import Head from 'next/head';

const Layout = (props) => (
    <div>
        <Head>
        <title>Latihan NextJS</title>
        <meta name="viewport" content="width-device-width, initial-scale1.0" />
        </Head>

        <Header/>
        <section className="section">
            <div className="container">
                {props.children}
            </div>
        </section>
        <Footer/>
    </div>
)

export default Layout;