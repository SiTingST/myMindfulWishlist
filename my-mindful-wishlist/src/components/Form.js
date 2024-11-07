
import { useEffect, useState } from 'react';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Tooltip from '@mui/material/Tooltip';

const Form = (props) => {
    const [formData, setFormData] = useState({
        name: props?.selectedCardData?.name || '',
        price: props?.selectedCardData?.price || '',
        websiteLink: props?.selectedCardData?.websiteLink || '',
        phone: props?.selectedCardData?.phone || '',
        imageLink: props?.selectedCardData?.imageLink || '',
        notes: props?.selectedCardData?.notes || ''
      });

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const today = new Date();
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        const formattedDate = today.toLocaleDateString('en-GB', options);

        const cardData = {
            id: props.totalCardCount + 1, 
            ...formData,
            date: formattedDate,
        };
        props.handleAddItems(cardData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };

    return (
        <div class="relative z-10" aria-modal="true" >
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
                <div class=" max-w-[50%] w-full mx-auto flex items-center p-8 justify-center rounded-xl border border-slate-100 bg-white" >
                    <form class="w-full" onSubmit={handleSubmit}> 
                        <h1 class="text-xl font-medium mb-6"> Add an item </h1>
                        <div class="mb-6">
                            <label for="productName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Name
                                <span class="text-red-500">*</span>
                            </label>
                            <input type="text" id="productName" name = "name" value={formData.name} class="border block w-full p-2.5 text-sm rounded-lg focus:outline-none focus:shadow-lg" placeholder='Enter item name' onChange={handleChange} required />
                        </div>
                        <div class="mb-6">
                            <label for="productPrice" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Price ($)
                            </label>
                            <input type="text" id="productPrice" name="price" value={formData.price} pattern="^\d+(\.\d+)?$" title="Enter digits only" class="border block w-full p-2.5 text-sm rounded-lg focus:outline-none focus:shadow-lg" onChange={handleChange} placeholder='50'/>
                        </div>
                        <div class="mb-6">
                            <label for="websiteLink" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Website Link
                            </label>
                            <input type="text" id="websiteLink" name="websiteLink" value={formData.websiteLink} class="border block w-full p-2.5 text-sm rounded-lg focus:outline-none focus:shadow-lg" onChange={handleChange}placeholder='https://www.' />
                        </div>
                        <div class="mb-6">
                            <label for="Image Link" class="flex items-center mb-2 pr-6 text-sm font-medium text-gray-900 dark:text-white">
                                Image Link
                                <Tooltip title="Right-click on the selected image and click 'Copy image address'" followCursor>
                                    <HelpOutlineIcon className="ml-0.5" fontSize="small" />
                                </Tooltip>
                            </label>
                            <input type="text" id="imageLink" name="imageLink" value={formData.imageLink} class="border block w-full p-2.5 text-sm rounded-lg focus:outline-none focus:shadow-lg" placeholder='https://www.' />
                        </div>
                        <div class="mb-6">
                            <label for="notes" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Notes
                            </label>
                            <input type="text" id="notes" name="notes" value={formData.notes} class="border block w-full p-2.5 text-sm rounded-lg focus:outline-none focus:shadow-lg" placeholder='I love the design!' />
                        </div>
                        <div class="flex justify-end gap-4">
                            <button type="submit" class=" bg-green-700 hover:shadow-lg text-white h-10 px-6 rounded-full">
                                {props.isEditMode ? 'Save Changes' : 'Add Items' }
                            </button>
                            <button class=" bg-black hover:shadow-lg text-white h-10 px-6 rounded-full" onClick={props.handleFormVisibility} >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;
