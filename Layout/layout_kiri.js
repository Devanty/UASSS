const Layout_Kiri = (props) => (
    <div>
        <link rel="stylesheet" href="/css/style.css"/>
        <div className="content">
                        <p className=" p_welcome"><h2>Welcome To Fialovi Fashion</h2><br/>
                        <h3>Find your own style here....</h3><br/>
                        <h3>We provide several sketches of clothes that you can choose</h3></p> 
                        <div className="column_left">
                        <div className="container_left">
                            {props.children}
                        </div>
                        </div></div>
    </div>
)

export default Layout_Kiri;