function findNames(users){
    return users.map(user=>user.name);
}
function find(users,name){
    return users.find(user=>user.name === name)
}
function getTotalAge(users){
    const ageAdded = 0;
    return users.reduce((age,user)=>age + user.age,ageAdded);
}
function filterUsersHaveAgeBiggerThan(users,age){
    return users.filter(user=>user.age>age);
}
function anyUnderAge(users,age){
    return users.some(user=>user.age<age);
}
function allAdults(users,age){
    return users.some(user=>user.age>age);
}
function printData(array){
        array.forEach((item,index)=>console.log(index+":"+item));
}
function createArray(...bar){
    //TODO: ...
}
function main(){
    const array = [1,2,3,4];
    const users = [{name:"Minh Anh",age:13},{name:"Ngoc Minh",age:14}];
    console.table(users,['name','age']);
    printData(array);
    const names = findNames(users);
    printData(names);
    console.log("Total ages:"+getTotalAge(users));
    const filterAge = filterUsersHaveAgeBiggerThan(users,13);
    console.log(filterAge);
    const users_result = find(users,"Minh Anh");
    console.log(users_result);
    const any_under_age = anyUnderAge(users,14);
    console.log(any_under_age);
    const all_adults = allAdults(users,11);
    console.log(all_adults);
}
main();