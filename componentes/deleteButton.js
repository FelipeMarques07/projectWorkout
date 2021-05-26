const getDeleteButton = () => { 
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button')
    deleteButton.addEventListener('click', deleteWorkout);

    return deleteButton;
}

const deleteWorkout = (event) => { 
    const deleteButton = event.target;
    
    const itemList = deleteButton.parentElement;

    itemList.remove();

    return deleteButton;

}

export default getDeleteButton