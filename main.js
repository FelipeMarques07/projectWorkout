import deleteButton from './componentes/deleteButton.js'
 
const createWorkout = (event) => {

    event.preventDefault();

    const fields = [
        {
            id:'workoutDate',
            name:'date'
        },
        {
            id:'workoutName',
            name:'workoutName'
        },
        {   id:'workoutTime',
            name:'time'
        }
    ]


    const list = document.querySelector('#dataTbody');
   
    const data = getValues(fields);
    
    const itemList = tableBuilder(data,fields);

    list.appendChild(itemList);

}

const addWorkout = document.querySelector('#dataFormButton');

addWorkout.addEventListener('click', createWorkout);


const getValues = (fields) => {

    const data = {}

    fields.forEach(field =>{
        const element = document.querySelector(`#${field.id}`);
        data[field.name] = element.value;
        element.value = "";
    })
   
    return data;
}

const tableBuilder = (data,fields) => {

    const itemList = document.createElement('tr');

    fields.forEach(field =>{
        const column = document.createElement('td')
        const textColumn =  document.createTextNode(data[field.name])
        column.appendChild(textColumn)
        itemList.appendChild(column) 
    })
    
    itemList.appendChild(deleteButton());
    return itemList;    
}

