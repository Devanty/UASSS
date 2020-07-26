function My_Function() 
{
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive")
}
function Beranda (){
    return(
        <div>
        <link rel="stylesheet" href="/css/style.css"/>
        <header>
            <div className="container_header">
                <div>
                    <h1>Fialovi Fashion</h1>
                    <input className="search" type="text" placeholder="Search..."></input>
                    <a className="searchbutton"><button className="tombol">Search</button></a>
                </div>
                <a href="uts.html"><img src="/images/w2.png"/></a>
            </div>
            <ul className="topnav">
                <li className="fa-stack">
                    <span onClick={My_Function}>
                        <i className="fas fa-align-justify font_awesome"></i>
                    </span>
                </li>
                <li><a href="/Menu/pembayaran">Pembayaran</a></li>
                <li><a href="/Menu/pesanan">Proses Pesanan</a></li>
                <li><a href="/Menu/histori">Histori Pesanan</a></li>
            </ul>
            <nav>
                <ul className="nav">
                    <li><a href="/Beranda">Beranda</a></li>
                    <li><a href="/Sketsa">Sketch</a>
                        <ul>
                            <li><a href="/Sketsa/sketsa1">Traditional Sketch</a></li>
                            <li><a href="/Sketsa/sketsa2">Modern Sketch</a></li>
                        </ul>
                    </li>
                    <li><a href="/Designer">Designer</a>
                        <ul>
                            <li><a href="/Designer/designer1">Riska Aulia</a></li>
                            <li><a href="/Designer/designer2">Septiany Diyah</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
    );
}

export default Beranda;