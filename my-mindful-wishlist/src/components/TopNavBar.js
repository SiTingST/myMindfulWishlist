import { Link } from 'react-router-dom';

const TopNavBar = () => {
    const logo = "/favicon.ico";
    return(
        <div className="sticky top-0 z-10 bg-white flex items-center gap-2 h-16"> 
                <img src ={logo} alt ="logo" className="w-8 h-8 ml-8 " ></img>
                <Link to="/">MyMindfulWishlist</Link>
            <div className="mr-[30px] ml-auto font-inter">
                <Link to="/our-story" className='text-[#FFB006]'>Our Story</Link>
            </div>
        </div>
    );
}

export default TopNavBar;