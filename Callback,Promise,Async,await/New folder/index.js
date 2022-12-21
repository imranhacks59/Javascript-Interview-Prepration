const datas = [
    {name:"Imran",Designation:"Software Engineer"},
    {name:"Rohit",Designation:"Software Engineer"}
]

// now see Normal function we have add data in datas array
// but firts will run then second push
//  to solve we have to give more time to getDatas callback
// If more function then it will create issues so we will use Callback,Promise , async and await
/*const getDatas = ()=>{

    setTimeout(()=>{
       let output="";
        datas.forEach((elem,index)=>{
            output+=`<li>${elem.name}</>`
        })
        // document.body.innerHTML=output
        document.getElementById('changeValue').innerHTML=output
    },1000)
}

const setDatas = (newData)=>{
    setTimeout(()=>{
        datas.push(newData);
    },2000)
}

getDatas();
setDatas({name:"Bhavesh",Designation:"Software"})

*/

// Using Callback**********************************************************

/* const getDatas = ()=>{

    setTimeout(()=>{
       let output="";
        datas.forEach((elem,index)=>{
            output+=`<li>${elem.name}</>`
        })
        // document.body.innerHTML=output
        document.getElementById('changeValue').innerHTML=output
    },1000)
}

const setDatas = (newData,getDatas)=>{
    setTimeout(()=>{
        datas.push(newData);
        getDatas();
    },2000)
}

setDatas({name:"Bhavesh",Designation:"Software"},getDatas)
*/

// Using promises*********************************************************
/* 
const getDatas = ()=>{

    setTimeout(()=>{
       let output="";
        datas.forEach((elem,index)=>{
            output+=`<li>${elem.name}</>`
        })
        // document.body.innerHTML=output
        document.getElementById('changeValue').innerHTML=output
    },1000)
}

const setDatas = (newData)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            datas.push(newData)
            let check=true;
            if(check){
                resolve()
            }else{
                reject("Bro check your code")
            }
        },2000)
    })
}

setDatas({name:"Bhavesh",Designation:"Software"})
   .then(getDatas)
   .catch(err=>console.log(err))

   */

//   Now we will solve using Async and await

const getDatas = ()=>{

    setTimeout(()=>{
       let output="";
        datas.forEach((elem,index)=>{
            output+=`<li>${elem.name}</>`
        })
        // document.body.innerHTML=output
        document.getElementById('changeValue').innerHTML=output
    },1000)
}

const setDatas = (newData)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            datas.push(newData)
            let check=true;
            if(check){
                resolve()
            }else{
                reject("Bro check your code")
            }
        },2000)
    })
}

// setDatas({name:"Bhavesh",Designation:"Software"})
//    .then(getDatas)
//    .catch(err=>console.log(err))

// async function start(){
//    await setDatas({name:"Bhavesh",Designation:"Software"}) //here program will wait to set data and if fix then it will goes to down
//    getDatas();
// }
// start();


const createData = async()=>{

    try{
    await setDatas({name:"Bhavesh",Designation:"Software"});
    getDatas();
    } catch(err){
       console.log(err)
    }
   
}
createData();

