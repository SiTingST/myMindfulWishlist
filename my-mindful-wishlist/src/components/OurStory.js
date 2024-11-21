import girlShopping from "../images/girlShopping.jpeg";

const OurStory = (props) => {
    return (
        <div>
        <div>
            <div className="mt-10">
                <h1 className="ml-20 text-5xl">Our Story </h1>
            </div>
            <div className="flex items-center space-x-10 w-5/12 mx-auto mt-20 rounded">
                <p className="text-lg z-10" >Hi! I'm the creator of this website. This side project started when I realized I was spending too much money while being "funemployed."
                <br /> <br />
                    I wanted a way to track the things I wanted to buy but hold off on purchasing them, giving myself time to reconsider. With sales and deals popping up constantly online, many of us, myself included, can fall into the trap of impulsive buying.
                    <br /> <br /> This website is designed to help you pause and think before making a purchase — which is where the "lockdown" feature comes in..</p>
                <img src={girlShopping} alt ="shoppingImg" className="w-64 h-64  rounded-[43%]"/>
                </div>
            </div>
        </div>
    );
}

export default OurStory;
