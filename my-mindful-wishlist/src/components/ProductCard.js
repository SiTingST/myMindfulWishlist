
import noImageFound from '../images/noImageAvailable.png'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const ProductCard = (props) => {
  let useCustomImageNotFound = true

  const regex = /\.(jpg|jpeg|png)$/i; // The 'i' makes it case insensitive
  console.log("!regex.test(props.imageLink)", !regex.test(props.imageLink))
  if (regex.test(props.imageLink)) {
    useCustomImageNotFound = false
  }

  return (
    <div class="relative flex flex-col m-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96" >
      <div class="relative h-56">
        {useCustomImageNotFound ? (
          <img
            className="w-full h-full rounded-lg bg-peach"
            src={noImageFound}
            alt="Not Available"
          />
        ) : (
          <img
            className="object-cover w-full h-full rounded-lg"
            src={props.imageLink}
            alt="Not Available"
          />
        )}
      </div>
      <div class="p-4">
        <p class="mb-2 text-slate-800 font-semibold">
          {props.title}
        </p>
        <div class="flex justify-between" >
          <span class="font-bold text-xl">
            ${props.price}
          </span>
          <div class='flex gap-2'>
            <button
              class="flex items-center rounded-md bg-red-500 px-2 border text-sm text-white hover:shadow-lg"
              type="button"
            >
              <DeleteOutlineIcon style={{ fontSize: 22 }}> </DeleteOutlineIcon>
              <span class='ml-1'> Remove </span>
            </button>
            <button
              class="flex items-center rounded-md bg-slate-800 px-4 border text-sm text-white hover:shadow-lg"
              type="button"
            >
              <LocalShippingIcon> </LocalShippingIcon>
              <span class='ml-1'> Buy </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;