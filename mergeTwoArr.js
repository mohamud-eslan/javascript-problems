const arr1 =[
    {id:1,name:"sai"},
    {id:2,name: "King"}
  ];
  const arr2 = [
      {id:1,age:23},
      {id:2,age:24}
  ];

  function mergeArrayObjects(arr1,arr2){
    return arr1.map((item,i)=>{
       if(item.id === arr2[i].id){
           //merging two objects
         return Object.assign({},item,arr2[i])
       }
    })
  }
  
  console.log(mergeArrayObjects(arr1,arr2));