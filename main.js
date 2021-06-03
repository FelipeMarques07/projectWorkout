import getDeleteButton from './componentes/deleteButton.js'
 
let totalHours = 0;
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
    itemList.dataset['time'] = data.time

    fields.forEach(field =>{
        const column = document.createElement('td')
        const columnText =  document.createTextNode(data[field.name])
        column.appendChild(columnText)
        itemList.appendChild(column) 
    })
    updateTotalTime(data.time)
    itemList.appendChild(getDeleteButton());
    return itemList;    
}

const buildCounter = (totalHours) => {
    const totalTimeDiv = document.querySelector("#counter");
    const contentTotalTime = `<p>${totalHours} horas de exercícios físicos </p>`;
    totalTimeDiv.innerHTML = contentTotalTime;
}

const updateTotalTime =(time) => {
    time = parseInt(time);
    if(isNaN(time) || !time){
        time = 0;  
    }
    totalHours = totalHours + time
    buildCounter(totalHours);  
}

export default updateTotalTime;