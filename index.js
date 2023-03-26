// Write your solution in this file!


const employee = {
    name : "value1",
    streetAddress: "value2"
}



function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee}
    newEmployee[key]= value
    return newEmployee
}



function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}


function deleteFromEmployeeByKey(object, key){
    const newObject = {...object}
    delete newObject[key]
    return newObject;
}


function destructivelyDeleteFromEmployeeByKey(object, key){
    delete object[key]
    return object
}














