
import noImageFound from '../images/noImageAvailable.png'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const ProductCard = (props) => {
  let useCustomImageNotFound = true

  const regex = /\.(jpg|jpeg|png|WebP)$/i;
  if (regex.test(props.imageLink)) {
    useCustomImageNotFound = false
  }

  const handleCardClick = () => {
    const { id, imageLink, name, websiteLink, notes, price} = props;
    props.handleSetEditMode()
    props.handleFormVisibility()
    const cardData = { id, imageLink, name, websiteLink, notes, price };
    props.setSelectedCardData(cardData)
  }

  const handleRemoveButtonClick = (e) => {
    e.stopPropagation()
    props.removeItem(props.id)
  }
  
  return (
    <div class="relative flex flex-col m-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 md:w-80 cursor-pointer" onClick={() => handleCardClick()} >
      <div class="relative h-56">
        {useCustomImageNotFound ? (
          <img
            className="object-contain w-full h-full rounded-lg bg-peach"
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
          {props.name}
        </p>
        <p class="mb-2  text-sm opacity-50">
          {props.date}
        </p>
        <div class="flex justify-between" >
          <span class="font-bold text-xl">
            ${props.price ? props.price : 0}
          </span>
          <div class='flex gap-2'>
            <button
              class="flex items-center rounded-md bg-red-500 px-2 border text-sm text-white hover:shadow-lg"
              onClick={handleRemoveButtonClick}
            >
              <DeleteOutlineIcon style={{ fontSize: 22 }}> </DeleteOutlineIcon>
              <span class='ml-1'> Remove </span>
            </button>
            <a href={props.websiteLink ? props.websiteLink : ""}
              class="flex items-center rounded-md bg-slate-800 px-4 border text-sm text-white hover:shadow-lg"
            >
              <LocalShippingIcon />
              <span class='ml-1'> Buy </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;