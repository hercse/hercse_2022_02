function googlesheet(url, rev, run) {
  fetch(url)
      .then(res => res.json())
      .then(res => {
          // console.log(res.values)
          if (rev != "") {
              output = res.values.reverse();
          } else {
              output = res.values;
          }
      }).then(() => {
          run(output);
      });
}

googlesheet("https://sheets.googleapis.com/v4/spreadsheets/1ht4ekGq2xZJHcmFbYmL2IqC1phBB6yqu82d8I9a9wYU/values/Links!A1:B999?alt=json&key=AIzaSyBdDg9HUG3s3377BO72GvlEBFJYYQwjBvc", "", (output) => {
  var writeInnerHTML_footer = "";
  output.forEach(e => {
      writeInnerHTML_footer = writeInnerHTML_footer + `
      <div class=""><a class="text-color-base text-decoration-none" href="${e[1]}">${e[0]}</a><br><br></div>
      `
  });
  document.querySelector(".footer-links").innerHTML = writeInnerHTML_footer;
});

// if (document.querySelector('[data-scroll-container]') && navigator.platform == 'Win32') {
//   var scroll = new LocomotiveScroll({
//       el: document.querySelector('[data-scroll-container]'),
//       smooth: true,
//       mobile: {
//           smooth: true
//       },
//       tablet: {
//           smooth: true
//       }
//   });

//   setTimeout(() => {
//       scroll.update();
//       // document.querySelectorAll("a").addEventListener('mousemove', () => {
//       //     scroll.update();
//       // })
//       document.querySelectorAll(".menu-background a, body a, img").forEach(e => {
//         e.addEventListener('mousemove', () => {
//             setTimeout(() => {
//               console.log(12343556747)
//               scroll.update();
//             }, 500);
//         })
//         e.addEventListener('click', () => {
//           setTimeout(() => {
//             console.log(12343556747)
//             scroll.update();
//           }, 500);
//       })
//       window.addEventListener('resize', ()=>{
//         setTimeout(() => {
//           console.log(12343556747)
//           scroll.update();
//         }, 500);
//       });
//     })
//   }, 2000)
// }