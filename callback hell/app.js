// function step1(){
//   console.log("selecting image")
//   setTimeout(function(){
//       console.log("image selected");
//       return("image selected");
//   } , 4000)
// }

// function step2(image){
//   console.log('applying filter')
//   setTimeout(function(){
//       console.log(`applied the fiter to the ${image}`);
//       return "filtered image"
//   } , 2000)
// }


//   var image = step1();
// let filteredImage = step2(image);



// function step1(){
//     console.log("selecting image")
//     setTimeout(function(){
//         console.log("image selected");
//         return("image selected");
//     } , 4000)
// }

// function step2(image){
//     console.log('applying filter')
//     setTimeout(function(){
//         console.log(`applied the fiter to the ${image}`);
//         return "filtered image"
//     } , 2000)
// }

// normal approach -> wrong
// function step1(){
//   console.log("selecting image")
//   setTimeout(function(){
//       console.log("image selected");
//       return("image selected");
//   } , 4000)
// }

// function step2(image){
//   console.log('applying filter')
//   setTimeout(function(){
//       console.log(`applied the fiter to the ${image}`);
//       return "filtered image"
//   } , 2000)
// }

// function step3(filter){
//   console.log("selecting caption");
//   setTimeout(function(){
//       console.log(`caption added to the ${filter}`)
//       return 'final image'
//   } , 3000)
// }

// function step4(final){
//   console.log('uploading your image plz wait');
//   setTimeout(function(){
//       console.log(`uploaded your ${final}`)
//   } , 4000)
// }

// let image = step1();
// let filter = step2(image);
// let final = step3(filter);
// step4(final);


// approach 2
// function step1(cb){
//   console.log("selecting the image")
//   setTimeout(function(){
//       console.log('image selected')
//       cb('selected image');
//   } , 4000)
// }

// function step2 (image) {
// console.log(`applying filter to the ${image}`)
// setTimeout(function() {
//   console.log('filter applied successfully');
//   return 'filtered image'
// }, 2000);
// }

// step1(function(image) {
// step2(image);
// });


// function step1(cb){
//   console.log("selecting the image")
//   setTimeout(function(){
//       console.log('image selected')
//       cb('selected image');
//   } , 4000)
// }

// function step2 (image,cb) {
// console.log(`applying filter to the ${image}`)
// setTimeout(function() {
//   console.log('filter applied successfully');
//   cb("filtered image")
// }, 2000);
// }

// function step3(filteredImage, cb){
//   console.log(`apply caption on ${filteredImage}`);
//   setTimeout(function(){
//     console.log("caption applied successfully");
//     cb("final");
//   })

// }

// step1(function(image) {
// step2(image, function(filteredImage){
//     step3(filteredImage,function(final){
      
//     });
// });
// });


// let promise = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         // let data = 'hi dosto ye promise hai';
//         // resolve(data);//case1
//         // let err = 'opps dikkat aagyi';
//         // reject(err);

//         resolve('hi mai resolve hogya i.e .then()');
//         reject('hi mai lut gya barbaad hogya i.e .catch()');
        
//     } , 3000);
// })


// .then() chaining  //arise kr rhi hai problem ko

let p1 = new Promise( (resolve , reject)=>{
  console.log("3 second ka wait kro kaam in process...")
  setTimeout( ()=>{
      resolve();
      // reject();
  } , 3000 )
} );


p1.then( ()=>{
      return new Promise( (resolve , reject)=>{
          console.log('promise run krdia hai intezaar kro ab');
          setTimeout( ()=>{
              console.log('2 second lag gye bhaisahab')
              resolve();
          } , 2000 );
      } )
} ) 
.then( ()=>{
      console.log("dono kaam hogye mere");
} )