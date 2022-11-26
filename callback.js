function callback(data){
    if(data != undefined){
        console.log("added with five", data + 5);
    }else{
        console.log("please prodive the first pramater");
    }
}
function addFive(data, callback){
    if(data != undefined){
        console.log("calling function", data);
    }
    callback(data)
}
addFive(50, callback)