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
  function mergeArrayObjects(arr1,arr2){
    let start = 0;
    let merge = [];
  
    while(start < arr1.length){
      if(arr1[start].id === arr2[start].id){
           //pushing the merged objects into array
          merge.push({...arr1[start],...arr2[start]})
      }
      //incrementing start value
      start = start+1
    }
    return merge;
  }
  
  console.log(mergeArrayObjects(arr1,arr2));