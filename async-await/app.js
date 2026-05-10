// async function rahul() {
//   return 10;
// }

// console.log(rahul());
// rahul().then(function (d) {
//   console.log(d);
// });

// -----------

// async function sam(a, b, c) {
//   console.log(10);
//   //   let ans = fetch("https://api.tvmaze.com/search/shows?q=girls");
//   let ans = await fetch("https://api.tvmaze.com/search/shows?q=girls");
//   console.log(20);
//   console.log(ans);
// }

// sam(10, 20, 30);


async function a() {
  let out = await fetch("https://api.tvmaze.com/search/shows?q=girls");
  console.log("start");
  console.log(out);
  console.log("end");
}


a();
b();