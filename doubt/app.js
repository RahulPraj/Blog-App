const p1=new Promise((resolve,reject)=>{

    setTimeout(() => {
        resolve('kaam done for p1')
    }, 10000);
    
})

const p2=new Promise((resolve,reject)=>{

   setTimeout(() => {
        resolve('kaam done for p2')
    }, 5000);
})

async function a(){

    console.log('hello duniya !!');

    const val=await p1
    console.log(val);

    const val2=await p2
    console.log(val2);
}

a()