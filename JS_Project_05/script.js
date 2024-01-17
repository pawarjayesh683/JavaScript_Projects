const clock = document.querySelector("#clock");
// clock.innerHTML = new Date();

// const time =  () => {
//     setInterval(() => {
//         clock.innerHTML = new Date();
//     }, 1000);
// }

// time();

setInterval(() => {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000);