import updateTotalTime from '../main.js'


const getDeleteButton = () => { 
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button')
    deleteButton.addEventListener('click', deleteWorkout);

    return deleteButton;
}

const deleteWorkout = (event) => { 
    const deleteButton = event.target;
    const itemList = deleteButton.parentElement;
    var removeHours = (parseFloat(itemList.dataset.time)) * -1;
    updateTotalTime(removeHours);
    itemList.remove();
    
    return deleteButton;
}

export default getDeleteButton