<<<<<<< HEAD
"use strict";
const hide = document.querySelector(".hide");

//GALLERY
const gallery = document.querySelector(".gallery-container");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

//BTNS APARICIÓN DESAPARICIÓN
gallery.addEventListener("mouseover", () => {
  next.style = `visibility:visible`;
  prev.style = `visibility:visible`;
});
//BTNS APARICIÓN DESAPARICIÓN
gallery.addEventListener("mouseout", () => {
    next.style = `visibility:hidden`;
    prev.style = `visibility:hidden`;
  });

//SUDADERAS
// const sudaderas = document.querySelector(".sudaderas1");
//SLIDER SUDADERAS

document.querySelector(".sudaderacas").onmousemove = (e) => {
    e.preventDefault();
    let indice = 0;
    let hijosa = e.target.parentElement.parentElement.parentElement.children;
    console.log(hijosa)
    for (let i = 1, tam = hijosa.length; i < tam-2; i++) {
      if (hijosa[i].classList.contains("hide2") !== true) {
        hijosa[i].classList.add("hide2");
        console.log(i);
        indice = i;
        if (indice === 10) {
          indice = 0;
        }
      }
    }
    for (let i = indice; i < indice+1; i++) {
      hijosa[i].classList.remove("hide2");
    }
  };

//BTN NEXT 50%
document.querySelector("#next").onclick = (e) => {
  e.preventDefault();
  let indice = 0;
  let hijos = e.target.parentElement.parentElement.children;
  console.log(hijos)
  for (let i = 0, tam = hijos.length; i < tam - 2; i++) {
    if (hijos[i].classList.contains("hide") !== true) {
      hijos[i].classList.add("hide");
      console.log(i);
      indice = i;
      if (indice === 20) {
        indice = 2;
      }
      if (indice === 18) {
        indice = 0;
      }
    }
  }
  for (let i = indice; i < indice + 5; i++) {
    hijos[i].classList.remove("hide");
  }
};

document.querySelector("#prev").onclick = (e) => {
  e.preventDefault();
  let indice = 0;
  let hijos = e.target.parentElement.parentElement.children;
  for (let i = 0, tam = hijos.length; i < tam - 2; i++) {
    if (hijos[i].classList.contains("hide") !== true) {
      hijos[i].classList.add("hide");
      indice = i;
      if (indice === 20) {
        indice = 2;
      }
      if (indice === 18) {
        indice = 0;
      }
    }
  }
  for (let i = indice; i < indice + 5; i++) {
    hijos[i].classList.remove("hide");
  }
};
=======
 "use strict"
 const hide = document.querySelector(".hide");

 //BTN NEXT 50%
 document.querySelector(".next").onclick = e => {
     e.preventDefault();
     let indice = 0;
     let hijos = e.target.parentElement.parentElement.children;
     for (let i = 0, tam = hijos.length; i < tam - 2; i++) {
         if (hijos[i].classList.contains('hide') !== true) {
             hijos[i].classList.add('hide');
             indice = i;
             if (indice === 8) {
                 indice = 0;
             }

         }
     }
     for (let i = indice; i < indice + 3; i++) {
         hijos[i].classList.remove('hide');

     }
 }

 document.querySelector(".prev").onclick = e => {
     e.preventDefault();
     let indice = 0;
     let hijos = e.target.parentElement.parentElement.children;
     for (let i = 0, tam = hijos.length; i < tam - 2; i++) {
         if (hijos[i].classList.contains('hide') !== true) {
             hijos[i].classList.add('hide');
             indice = i;
             if (indice === 8) {
                 indice = 0;
             }

         }
     }
     for (let i = indice; i < indice + 3; i++) {
         hijos[i].classList.remove('hide');

     }
 }

 //BTN NEXT 40%
 document.querySelector(".next2").onclick = e => {
     e.preventDefault();
     let indice = 0;
     let hijos = e.target.parentElement.parentElement.children;
     for (let i = 0, tam = hijos.length; i < tam - 2; i++) {
         if (hijos[i].classList.contains('hide') !== true) {
             hijos[i].classList.add('hide');
             indice = i;
             if (indice === 8) {
                 indice = 0;
             }

         }
     }
     for (let i = indice; i < indice + 3; i++) {
         hijos[i].classList.remove('hide');

     }
 }

 document.querySelector(".prev2").onclick = e => {
     e.preventDefault();
     let indice = 0;
     let hijos = e.target.parentElement.parentElement.children;
     for (let i = 0, tam = hijos.length; i < tam - 2; i++) {
         if (hijos[i].classList.contains('hide') !== true) {
             hijos[i].classList.add('hide');
             indice = i;
             if (indice === 8) {
                 indice = 0;
             }

         }
     }
     for (let i = indice; i < indice + 3; i++) {
         hijos[i].classList.remove('hide');

     }
 }

 //BTN NEXT 30%
 document.querySelector(".next3").onclick = e => {
     e.preventDefault();
     let indice = 0;
     let hijos = e.target.parentElement.parentElement.children;
     for (let i = 0, tam = hijos.length; i < tam - 2; i++) {
         if (hijos[i].classList.contains('hide') !== true) {
             hijos[i].classList.add('hide');
             indice = i;
             if (indice === 8) {
                 indice = 0;
             }

         }
     }
     for (let i = indice; i < indice + 3; i++) {
         hijos[i].classList.remove('hide');

     }
 }

 document.querySelector(".prev3").onclick = e => {
     e.preventDefault();
     let indice = 0;
     let hijos = e.target.parentElement.parentElement.children;
     for (let i = 0, tam = hijos.length; i < tam - 2; i++) {
         if (hijos[i].classList.contains('hide') !== true) {
             hijos[i].classList.add('hide');
             indice = i;
             if (indice === 8) {
                 indice = 0;
             }

         }
     }
     for (let i = indice; i < indice + 3; i++) {
         hijos[i].classList.remove('hide');

     }
 }

 //  //BTN PREV 50%
 //  document.querySelector("#prev1").onclick = e => {
 //     e.preventDefault();
 //     let indice = 8;
 //     let hijos = e.target.parentElement.parentElement.children;
 //     console.log(hijos[1])
 //     console.log(hijos[1].classList.contains(`ljkñ`))

 //     for (let i = 8, tam = hijos.length; i < tam; i--) {
 //         if (hijos[i].classList.contains(`dfgd`) == true) {
 //             hijos[i].classList.remove(`hide`)
 //             hijos[i].classList.add(`paca`);
 //         console.log(hijos[i].classList)
 //         // if(hijos[i].classList.contains(`ljkñ`) == true){hijos[i].classList.add('hide')}
 //         //     if (indice === 0) {
 //         //         indice = 8;
 //         //     }

 //         }if(hijos[i].classList.contains(`ljkñ`)){hijos[i].classList.add(`hide`)};

 //     for (let i = indice; i > indice; i--){
 //        if (hijos[i].classList.contains('hide') !== true){hijos[i].classList.remove('hide');};
 //             console.log([i])

 //     }}
 // }
 // //BTN PREV 40%
 // document.querySelector("#prev2").onclick = e => {
 //     e.preventDefault();
 //     let indice = 8;
 //     let hijos = e.target.parentElement.parentElement.children;
 //     console.log(hijos[1])
 //     console.log(hijos[1].classList.contains(`ljkñ`))

 //     for (let i = 8, tam = hijos.length; i < tam; i--) {
 //         if (hijos[i].classList.contains(`dfgd`) == true) {
 //             hijos[i].classList.remove(`hide`)
 //             hijos[i].classList.add(`paca`);
 //         console.log(hijos[i].classList)
 //         // if(hijos[i].classList.contains(`ljkñ`) == true){hijos[i].classList.add('hide')}
 //         //     if (indice === 0) {
 //         //         indice = 8;
 //         //     }

 //         }if(hijos[i].classList.contains(`ljkñ`)){hijos[i].classList.add(`hide`)};

 //     for (let i = indice; i > indice; i--){
 //        if (hijos[i].classList.contains('hide') !== true){hijos[i].classList.remove('hide');};
 //             console.log([i])

 //     }}
 // }
 // //BTN PREV 30%
 // document.querySelector("#prev3").onclick = e => {
 //     e.preventDefault();
 //     let indice = 8;
 //     let hijos = e.target.parentElement.parentElement.children;
 //     console.log(hijos[1])
 //     console.log(hijos[1].classList.contains(`ljkñ`))

 //     for (let i = 8, tam = hijos.length; i < tam; i--) {
 //         if (hijos[i].classList.contains(`dfgd`) == true) {
 //             hijos[i].classList.remove(`hide`)
 //             hijos[i].classList.add(`paca`);
 //         console.log(hijos[i].classList)
 //         // if(hijos[i].classList.contains(`ljkñ`) == true){hijos[i].classList.add('hide')}
 //         //     if (indice === 0) {
 //         //         indice = 8;
 //         //     }

 //         }if(hijos[i].classList.contains(`ljkñ`)){hijos[i].classList.add(`hide`)};

 //     for (let i = indice; i > indice; i--){
 //        if (hijos[i].classList.contains('hide') !== true){hijos[i].classList.remove('hide');};
 //             console.log([i])

 //     }}
 // }
>>>>>>> 7d3222daa11a4897ae2d50771749661245a7a94f
