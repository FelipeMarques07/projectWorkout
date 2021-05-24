const deleteWorkout = () => { 
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'deletar';
    deleteButton.addEventListener('click', removeItemList);

    return deleteButton;
}

const removeItemList = (event) => { 
    const deleteButton = event.target;
    
    const itemList = deleteButton.parentElement;

    itemList.remove();

    return deleteButton;

}

export default deleteWorkout