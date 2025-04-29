var anyarr:any=['Angular',10,true,{sub:'React'}];

anyarr.forEach(

    (element,index)=>{
        console.log("Index is => ",index,"  Element is =>", anyarr[index]);
    }
)