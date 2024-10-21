
import banner from '../images/banner.jpg'

const HeaderComponent = (props) => {
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
        <p className="text-white text-sm">Total Cost</p>
        <h1 className="text-red-500	text-3xl font-semibold">${props.totalCost}</h1>
    </div>
  </div>

  );
}

export default HeaderComponent;
