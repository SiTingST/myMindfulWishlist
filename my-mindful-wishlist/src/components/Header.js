const Header = () => {
    const logo = "/favicon.ico";
    return(
        <div className="sticky top-0 z-10 bg-white flex items-center gap-2 h-16"> 
                <img src ={logo} alt ="logo" className="w-8 h-8 ml-8 " ></img>
                <a href ="/"> MyMindfulWishlist</a>
            <div className="mr-[30px] ml-auto font-inter">
                <a href = "/"  className="font-inter"> Our Story     </a>

            </div>
        </div>
    );

}

export default Header;