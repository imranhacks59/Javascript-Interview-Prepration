let str = 'hello world';

let obj={};

for(let i=0;i<str.length;i++){
    
    if(str[i]==' '){
        continue;
    }
    if(obj.hasOwnProperty(str[i])){
        obj[str[i]] +=1
    }else{
        obj[str[i]] = 1
    }
}

console.log(obj)