import AddIcon from '@mui/icons-material/Add';

const AddItemCard = (props) => {
  return (
    <div class= "flex flex-col justify-center m-6 border rounded-lg w-96 h-90 bg-black  cursor-pointer" onClick={props.handleCardClick}>
        <div class= "flex flex-col items-center"> 
            <AddIcon style={{ color: 'white', fontSize:50 }} />
            <p class= "text-white text-sm"> Add new item </p>
        </div>
    </div>
  );
}

export default AddItemCard;