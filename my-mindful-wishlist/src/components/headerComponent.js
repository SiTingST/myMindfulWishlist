
import banner from '../images/banner.jpg'

function headerComponent() {
  return (
    <div
    className="relative h-[200px] border border-black rounded-lg mx-4 bg-cover flex items-center justify-center"
    style={{ backgroundImage: `url(${banner})` }}
  >
     <div className="absolute inset-0 bg-black bg-opacity-50 "/>
      <div className="relative z-10 p-4 text-center">
        <h1 className="text-white font-semibold text-5xl">My Wishlist</h1>
      </div>
      <div className="absolute bottom-4 right-4">
        <p className="text-white text-base">Total Cost</p>
        <h1 className="text-white">$xx</h1>
    </div>
  </div>

  );
}

export default headerComponent;
