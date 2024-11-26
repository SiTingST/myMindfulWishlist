import girlShopping from "../images/girlShopping.jpeg";

const OurStory = (props) => {
    return (
        <div>
            <div >
                <div className="mt-20">
                    <h1 className="ml-[400px] text-4xl"> Our Story</h1>
                </div>
                <div className="flex items-center space-x-10 w-7/12 mx-auto mt-10 rounded">
                    <p className="text-lg z-10 font-poppins leading-relaxed ">
                        Hey there! I’m the creator of My Mindful Wishlist, a project that began when I realized I was overspending during a time of being “funemployed.” With constant sales, limited-time offers, and ads everywhere, I often found myself making impulse purchases that I later regretted. Sound familiar?
                        <br /> <br />
                        I wanted a way to slow down, reflect, and make more intentional decisions about what I truly needed or wanted — and that’s how My Mindful Wishlist was born. It’s a space where you can add items you're interested in and give yourself time to reconsider before clicking “buy.”
                        <br /> <br />
                        Thank you for being part of this journey — together, we can create a more mindful way of shopping, where purchases are made with intention, not impulse.
                    </p>
                    <img src={girlShopping} alt="shoppingImg" className="w-64 h-64  rounded-[43%]" />
                </div>
            </div>
        </div>
    );
}

export default OurStory;
